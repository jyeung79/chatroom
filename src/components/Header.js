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
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">Chatroom</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar" />
        <Navbar.Collapse id="basic-navbar">
          <Nav className="align-items-center justify-content-end w-100">
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
      </Container>
    </Navbar>
  );
}

export default Header;