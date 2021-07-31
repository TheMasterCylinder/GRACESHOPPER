import React from 'react';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';

const CardUno = (props) => {
const {product} = props;
return (
        <div >
           
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product && product.image} alt={product && product.name} />
  <Card.Body>
    <Card.Title>{product && product.name}</Card.Title>
    <Card.Text>
      {product && product.desc}
    </Card.Text>
    <Card.Title>${product && product.price}</Card.Title>
    <Button variant="primary">Add to Cart</Button>
  </Card.Body>
</Card> 
          
      
        </div>
    )
}

export default CardUno 