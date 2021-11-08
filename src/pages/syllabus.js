import React from 'react';
import Navbar from '../components/navbar/index';
import { Container } from 'react-bootstrap';
import { BiRightArrowAlt } from 'react-icons/bi';
import { LinkContainer } from 'react-router-bootstrap';
import Syllabus from '../components/syllabus';
// import './style.css'

function Lesson() {
  return (
    <>
      <Navbar />
      <Container className='pt-4 pb-4'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            <h1>Course Syllabus</h1>
          </div>
          <div className='col-md-1'>
            <LinkContainer to={'/lesson1'}>
              <BiRightArrowAlt className='display-6' />
            </LinkContainer>
          </div>
        </div>
        <Syllabus />
      </Container>
    </>
  );
}

export default Lesson;
