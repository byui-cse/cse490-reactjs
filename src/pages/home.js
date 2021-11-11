import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Course, Lessons } from '../util/courseSwapper';
import Syllabus from '../components/syllabus';
import { GiNotebook } from 'react-icons/gi';
import { FiExternalLink } from 'react-icons/fi';
import './style.css';

import Navbar from '../components/navbar/index';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Container className='pt-4 pb-4'>
        <h1>{Course.code} - Course Materials</h1>
        <Accordion defaultActiveKey='-1'>
          <Accordion.Item eventKey={-1}>
            <Accordion.Header style={{ marginTop: '0px' }}>
              Course Syllabus
            </Accordion.Header>
            <Accordion.Body>
              <Syllabus />
              <iframe
                width='560'
                height='315'
                className='img-tutorial'
                src={Course.homeVideo}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
              <h6>
                This is an unofficial listing of the course content. Please
                consult I-Learn for the official list of materials, including
                quizzes and due-dates.
              </h6>
            </Accordion.Body>
          </Accordion.Item>
          {Lessons.map((key, lIndex) => {
            return (
              <Accordion.Item eventKey={lIndex} key={Math.random()}>
                <Accordion.Header style={{ marginTop: '0px' }}>
                  <GiNotebook /> &nbsp;
                  {key.title}
                </Accordion.Header>
                <Accordion.Body>
                  <LinkContainer to={key.link} key={key.title}>
                    <div className='huge-link'>
                      <p className='link-primary'>
                        <FiExternalLink /> Lesson Content
                      </p>
                      <h4>Lesson Topics:</h4>
                      <ul>
                        {key.topics.map((topic, tIndex) => {
                          return (
                            <div className='topic' key={Math.random()}>
                              <li>
                                <p>{topic}</p>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  </LinkContainer>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
    </div>
  );
}

export default App;
