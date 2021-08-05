import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas'
import {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Navbar1 = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

 <Nav.Link href="#Home">Home</Nav.Link>

     

<Nav.Link href="#Cart">Cart</Nav.Link>

      

<Nav.Link href="#Login" onClick={handleShow}>Login/Register</Nav.Link>

<Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Register</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
   </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

<br/>
<br/>
<br/>

<Offcanvas.Title>Login</Offcanvas.Title>

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
   </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>



        </Offcanvas.Body>
      </Offcanvas>
     

    </Nav>

    </Container>
  </Navbar>
      
        </div>
    )
}

export default Navbar1 