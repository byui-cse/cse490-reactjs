import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Course, Lessons } from '../../util/courseSwapper';
import { GiNotebook } from 'react-icons/gi';
import { FaReact } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function SiteNav() {
  return (
    <Navbar expand='lg' className='my-nav'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand className='my-item'>
            <FaReact /> &nbsp; {Course.name}
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='my-item' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav
            className=' me-auto justify-content-end'
            style={{ width: '100%' }}>
            <LinkContainer to={'/'}>
              <Nav.Link href='#home' className='my-item'>
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={'/syllabus'}>
              <Nav.Link href='#syllabus' className='my-item'>
                Syllabus
              </Nav.Link>
            </LinkContainer>
            <NavDropdown
              title={<span className='my-item'>Lessons</span>}
              id='basic-nav-dropdown'>
              {Lessons.map((l, i) => (
                <LinkContainer
                  to={l.link}
                  key={l.title}
                  style={{ color: 'white !important' }}>
                  <NavDropdown.Item>
                    <GiNotebook /> &nbsp; {i + 1}
                  </NavDropdown.Item>
                </LinkContainer>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNav;
