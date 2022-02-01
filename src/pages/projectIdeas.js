import React from 'react';
import Navbar from '../components/navbar/index';
import { Container } from 'react-bootstrap';
import CardView from '../components/cardView';
import { Row, Col } from 'react-bootstrap';
import { useEasybase, Auth } from 'easybase-react';
import { useEffect, useState } from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import AddModal from '../components/addProjectModal';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

function ProjectIdeasPage() {
  const [show, setShow] = useState(false);
  const [loggedInID, setLoggedInID] = useState(false);
  const [formTitle, setFormTitle] = useState();
  const [formDescription, setFormDescription] = useState();
  const [easybaseData, setEasybaseData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { db, isUserSignedIn, userID, signOut } = useEasybase();
  const adminID = 'birchn@byui.edu';
  const toastDefaults = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const mounted = async () => {
    if (isUserSignedIn()) {
      setLoggedInID(userID());
      const ebData = await db('PROJECTS').return().all();
      setEasybaseData(ebData);
      if (loggedInID === adminID) {
        // if admin, check for changes every second
        setInterval(async function () {
          const ebData = await db('PROJECTS').return().all();
          setEasybaseData(ebData);
        }, 1000);
      }
    }
  };

  const handleSignOut = () => {
    signOut();
    setLoggedInID(false);
  };

  useEffect(() => {
    mounted();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const addProjectToDB = async (project) => {
    await db('PROJECTS').insert(project).one();
    return;
  };

  const onTitleInput = ({ target: { formTitle } }) => setFormTitle(formTitle);
  const onFormSubmit = (e) => {
    e.preventDefault();
    const project = {
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      created: new Date(),
      email: loggedInID,
    };
    setEasybaseData((easybaseData) => [...easybaseData, project]);
    addProjectToDB(project)
      .then(() => {
        setFormTitle();
        setFormDescription();
        handleClose();
        toast.success('😁 Successfully saved 😁', toastDefaults);
      })
      .catch((error) => {
        toast.error('🤨 Failed to save 😩', toastDefaults);
      });
  };

  const onDescriptionInput = ({ target: { formDescription } }) =>
    setFormDescription(formDescription);

  const deleteItem = async (key) => {
    let myArray = easybaseData.filter(function (obj) {
      return obj._key !== key;
    });
    await db('PROJECTS')
      .delete()
      .where({ _key: key })
      .one()
      .then(() => {
        setEasybaseData(myArray);
        toast.success('😁 Successfully deleted item 😁', toastDefaults);
      })
      .catch(() => {
        toast.error('🤨 Failed to delete 😩', toastDefaults);
      });
  };

  return (
    <>
      <Navbar />
      <Auth
        dictionary={{
          signInHeader: 'Sign in to view project ideas',
          emailLabel: 'BYU-Idaho email address',
        }}>
        {!loggedInID && userID() && setLoggedInID(userID())}
        <Container className='pt-4 pb-4'>
          <div className='row'>
            <div className='col-md-12'>
              <h1>
                Project Ideas{' '}
                <BsPlusSquare className='addIdeaButton' onClick={handleShow} />
              </h1>
            </div>
          </div>
          <Row xs={1} md={2} lg={3} xl={4} xxl={5} className='g-4'>
            {easybaseData
              .sort((a, b) => Date.parse(b.created) - Date.parse(a.created))
              .map((i, index) => (
                <Col key={index}>
                  <CardView
                    {...i}
                    canDelete={i.email === loggedInID || loggedInID === adminID}
                    deleteHandler={deleteItem}
                  />
                </Col>
              ))}
          </Row>
          {loggedInID && (
            <button
              onClick={handleSignOut}
              className='btn btn-outline-primary fRight'>
              Sign Out
            </button>
          )}
        </Container>
      </Auth>
      <AddModal
        show={show}
        handleClose={handleClose}
        onFormSubmit={onFormSubmit}
        onTitleInput={onTitleInput}
        formTitle={formTitle}
        onDescriptionInput={onDescriptionInput}
        formDescription={formDescription}
        handleClose={handleClose}
      />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default ProjectIdeasPage;
