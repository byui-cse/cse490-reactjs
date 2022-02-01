import React from 'react';
import Navbar from '../components/navbar/index';
import { Container } from 'react-bootstrap';
import CardView from '../components/cardView';
import { Row, Col, Modal, Button, Form } from 'react-bootstrap';
import { useEasybase, Auth } from 'easybase-react';
import { useEffect, useState } from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
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
        toast.success('😁 Successfully saved 😁', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        toast.error('🤨 Failed to save 😩', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
        toast.success('😁 Successfully deleted item 😁', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() => {
        toast.error('🤨 Failed to delete 😩', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
            <button onClick={handleSignOut} className='btn btn-primary fRight'>
              Sign Out
            </button>
          )}
        </Container>
      </Auth>

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
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={onFormSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Project Idea</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className='mb-3' controlId='formTitle'>
              <Form.Label>Project Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter title'
                onChange={onTitleInput}
                value={formTitle}
                name='title'
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formDescription'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                type='textarea'
                placeholder='Project Description'
                onChange={onDescriptionInput}
                value={formDescription}
                name='description'
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' type='submit'>
              Save Project Idea
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ProjectIdeasPage;
