import React from 'react';
import Navbar from '../components/navbar/index';
import { Container, Row, Col } from 'react-bootstrap';
import Readings from '../components/readings';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { LinkContainer } from 'react-router-bootstrap';
import { HiUserGroup } from 'react-icons/hi';
import { GiStrongMan } from 'react-icons/gi';
import { RiLandscapeFill } from 'react-icons/ri';
// import './style.css'

function Lesson(props) {
  const l = props.lesson;
  let prev,
    next = '';
  if (props.num > 1) {
    prev = '/lesson' + (props.num - 1);
  } else {
    prev = '/syllabus';
  }
  if (props.num < 13) {
    next = '/lesson' + (props.num + 1);
  }
  return (
    <>
      <Navbar />
      <Container className='pt-4 pb-4'>
        <Row xs={12}>
          <Col xs={1}>
            <LinkContainer to={prev}>
              <BiLeftArrowAlt className='display-6' />
            </LinkContainer>
          </Col>
          <Col xs={10}>
            <h1>{l.title}</h1>
          </Col>
          <Col xs={1}>
            {props.num < 13 && (
              <LinkContainer to={next}>
                <BiRightArrowAlt className='display-6 negativeMarginLeft' />
              </LinkContainer>
            )}
          </Col>
        </Row>
        <h2>
          <RiLandscapeFill /> &nbsp; Overview
        </h2>
        <p>{l.overview}</p>
        <Readings readings={l.readings} />
        {l.teamAssignment && (
          <>
            <h2>
              <HiUserGroup /> &nbsp; Team Assignment
            </h2>
            <p>{l.teamAssignment}</p>
          </>
        )}
        {l.assignment && (
          <>
            <h2>
              <GiStrongMan /> Personal Assignment
            </h2>
            <p>{l.assignment}</p>
          </>
        )}
      </Container>
    </>
  );
}

export default Lesson;
