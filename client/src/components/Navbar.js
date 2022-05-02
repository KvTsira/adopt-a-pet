import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../utils/auth';
import Volunteerform from "./VolunteerForm";
import Adoptform from "./AdoptForm"

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const [showvolunteerModal, setVolunteerModal] = useState(false);
  const [showAdoptModal, setAdoptModal] = useState(false);
  

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            Pets Search
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'>
                Search For Pets
              </Nav.Link>
              {/* if user is logged in show saved pets and logout */}
              {Auth.loggedIn() ? (
                <>
                 <Navbar.Brand onClick={() =>setVolunteerModal(!showModal)}>
                  Volunteer!
                 </Navbar.Brand>
                 <Navbar.Brand onClick={() => setAdoptModal(true)}>
                  Contact To Adopt!
                 </Navbar.Brand>
                  <Nav.Link as={Link} to='/saved'>
                    See Your Pet
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(!showModal)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
      <Modal
        size='lg'
        show={showvolunteerModal}
        onHide={() => setVolunteerModal(false)}
        aria-labelledby='volunteer-modal'>
          <Modal.Header closeButton>
          <Modal.Title id='volunteer-modal'>Volunteer Form</Modal.Title>
          <Modal.Body>
          <Volunteerform handleModalClose={() => setVolunteerModal(!showvolunteerModal)} />
          </Modal.Body>
          </Modal.Header>
        </Modal>
        <Modal
        size='lg'
        show={showAdoptModal}
        onHide={() => setAdoptModal(false)}
        aria-labelledby='adopt-modal'>
          <Modal.Header closeButton>
          <Modal.Title id='adopt-modal'>Adoption Form</Modal.Title>
          <Modal.Body>
          <Adoptform handleModalClose={() => setAdoptModal(!showAdoptModal)} />
          </Modal.Body>
          </Modal.Header>
        </Modal>
    </>
  );
};

export default AppNavbar;

