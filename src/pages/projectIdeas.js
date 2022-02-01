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

/* todo
split modals into own files
add auth
add sockets
*/

function ProjectIdeasPage() {
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [formTitle, setFormTitle] = useState();
  const [formDescription, setFormDescription] = useState();
  const [easybaseData, setEasybaseData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { db } = useEasybase();

  const mounted = async () => {
    const ebData = await db('PROJECTS').return().all();
    setEasybaseData(ebData);
  };

  useEffect(() => {
    mounted();
  }, []);

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
    };
    addProjectToDB(project)
      .then(() => {
        setFormTitle('');
        setFormDescription('');
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
          autoClose: 5000,
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

  return (
    <>
      <Navbar />
      <Container className='pt-4 pb-4'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>
              Project Ideas{' '}
              {isLoggedIn && (
                <BsPlusSquare className='addIdeaButton' onClick={handleShow} />
              )}
              {!isLoggedIn && (
                <button className='btn btn-primary fRight'>Sign in</button>
              )}
            </h1>
          </div>
        </div>
        <Row xs={1} md={2} lg={3} xl={4} xxl={5} className='g-4'>
          {easybaseData
            .sort((a, b) => Date.parse(b.created) - Date.parse(a.created))
            .map((i, index) => (
              <Col key={index}>
                <CardView {...i} />
              </Col>
            ))}
        </Row>
      </Container>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
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
