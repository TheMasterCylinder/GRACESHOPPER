import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';





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

<Link to='/Home'> <Nav.Link href="#Home">Home</Nav.Link>
</Link>
     
<Link to='/Cart'>
<Nav.Link href="#Cart">Cart</Nav.Link>
</Link>
      
<Link to='/Login'>
<Nav.Link href="#Login">Login</Nav.Link>
</Link>
     

    </Nav>

    </Container>
  </Navbar>
      
        </div>
    )
}

export default Navbar1 