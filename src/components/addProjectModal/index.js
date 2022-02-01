import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
function AddModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Form onSubmit={props.onFormSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Project Idea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className='mb-3' controlId='formTitle'>
            <Form.Label>Project Title</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter title'
              onChange={props.onTitleInput}
              value={props.formTitle}
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
              onChange={props.onDescriptionInput}
              value={props.formDescription}
              name='description'
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.handleClose}>
            Close
          </Button>
          <Button variant='primary' type='submit'>
            Save Project Idea
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddModal;
