import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'


export default function Header() {
  return (
    <>
    <Navbar style={{backgroundColor: "lightblue"}}>
    <Container>
    <Navbar.Brand style={{color: "red"}} >Movies Night</Navbar.Brand>
    <Nav >
      <Link to="/movie/popular" style={{color: "red"}} className="nav-link active mx-3">Movies</Link>
      <Link to="/contact" style={{color: "red"}}className="nav-link active mx-3">Contact Us</Link>
      <Link to="/About"  style={{color: "red" }}className="nav-link active mx-3">About</Link>

    </Nav>
    </Container>
  </Navbar>
  </>
    
  )
}

