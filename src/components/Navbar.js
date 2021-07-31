import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';





const Navbar1 = () => {


    return (
        <div className="navbar" color='black'>
           
 
           <Navbar bg="dark" variant="dark">
    <Container>
    <img
        src="/MAVERICK.svg"
        width="80"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    <Navbar.Brand href="#home">IMAGIMATION</Navbar.Brand>
<Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">cart</Nav.Link>
      <Nav.Link href="#pricing">login</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      
        </div>
    )
}

export default Navbar1 