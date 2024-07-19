import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthContext from './AuthContext';


function HeaderComponent() {

  const { user } = useContext(AuthContext);

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Demo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {user ? (<Nav.Link href="/restricted">Restricted</Nav.Link>) : (<><Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link></>) }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default HeaderComponent;