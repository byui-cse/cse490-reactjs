import React from 'react';
import Navbar from '../components/navbar/index';
import { Container } from 'react-bootstrap';
import ProjectIdeas from '../const/projectIdeas';
import CardView from '../components/cardView';
import { Row, Col } from 'react-bootstrap';
// import './style.css'

function ProjectIdeasPage() {
  return (
    <>
      <Navbar />
      <Container className='pt-4 pb-4'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>Project Ideas</h1>
          </div>
        </div>
        <Row xs={1} md={2} lg={3} xl={4} xxl={5} className='g-4'>
          {ProjectIdeas.map((i, index) => (
            <Col>
              <CardView key={index} {...i} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ProjectIdeasPage;
