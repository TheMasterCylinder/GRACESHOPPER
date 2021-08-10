import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'
import { useAuth0 } from '@auth0/auth0-react';


const Navbar1 = (props) => {

  const {loginWithRedirect} = useAuth0();
  const {logout} = useAuth0();

  const {countCartItems} = props;

    

    
    

    return (
        <div className="navbar" >
           
 
           <Navbar bg="dark" variant="dark" style={{ width: '100rem' }}>
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

 

     

<Nav.Link href="#Cart">

<img
        src="/caart.svg"
        width="50"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
{countCartItems ? (
<Badge pill bg="danger">{countCartItems}</Badge>
  ) : (
    ''
    ) }
  </Nav.Link>

  

<Nav.Link href="#Login" onClick={() => loginWithRedirect()}>Login/Register</Nav.Link>

<Nav.Link href="#Login" onClick={() => logout()}>Logout</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
      
        </div>
    )
}

export default Navbar1 