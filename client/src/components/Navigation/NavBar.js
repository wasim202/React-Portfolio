import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="portfolio">Portfolio</Nav.Link>
            <Nav.Link href="contactme">Contact Me</Nav.Link>
            <Nav.Link href="resume">Resume</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    // <ul>
    //     <li>
    //         <Link to='/'>
    //             Home
    //         </Link>
    //     </li>
    //     <li>
    //         <Link to='/aboutme'>
    //           AboutMe
    //         </Link>
    //     </li>
    //     <li>
    //         <Link to='/contact'>
    //            contact
    //         </Link>
    //     </li>
    // </ul>
  )
}
