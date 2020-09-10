import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { auth } from '../services/firebase';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <Container fluid="md">
      <Navbar bg="primary" variant="dark" expand="md" fixed="top">
        <Navbar.Brand>
          <Link className="text-white bold" to="/">Chatroom</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar" />
        <Navbar.Collapse id="basic-navbar">
          <Nav className="align-items-center justify-content-end">
            {auth().currentUser
              ? <>
                  <LinkContainer to="/login">
                    <Nav.Link>Profile</Nav.Link>
                  </LinkContainer>
                  <Nav.Link>
                    <Button className="my-auto"variant="primary" onClick={() => auth().signOut()}>Logout</Button>
                  </Nav.Link>
                </>
              : <>
                  <LinkContainer to="/login">
                    <Nav.Link>Sign In</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signup">
                    <Nav.Link>Sign Up</Nav.Link>
                  </LinkContainer>
              </>   
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;