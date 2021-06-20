import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';


const TitleHeading = () => {

  return (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Kentiki Drinks</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default TitleHeading;
