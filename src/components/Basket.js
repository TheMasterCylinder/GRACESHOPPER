import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 0;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (

        <div className='bkg'>
             <br/>
      <hr/>
      <br/>
            <Card className='cart' style={{ width: '50rem' }}>
             <Card.Header>Your Cart</Card.Header>
        <Card.Body>

        <div>
            
            <div>
                {cartItems.length === 0 && <div>This cart is empty :(</div>}
               
                {cartItems.map((item) => (
                    <div key={item.id} className='row'>
                        <div>{item.name}</div>
                        <div>
                        <Button variant="danger" onClick={()=>onAdd(item)}>+</Button>{' '}
                        <Button variant="primary" onClick={()=>onRemove(item)}>-</Button>{' '}     
                        </div>
                        <div>
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>
            <br/>
                <br/>
                <br/>
             </div>

{cartItems.length !== 0 && (
    <>
    <hr></hr>
 <div className="row">
     <div>Items price</div>
     <div>${itemsPrice.toFixed(2)}</div>
     </div>   


     <div className="row">
     <div>Tax</div>
     <div>${taxPrice.toFixed(2)}</div>
     </div>   


     <div className="row">
     <div>Shipping</div>
     <div>${shippingPrice.toFixed(2)}</div>
     </div>   


     <div className="row">
     <strong>Total</strong>
     <strong>${totalPrice.toFixed(2)}</strong>
     </div> 

     <hr/>
     <div className='row'>
     <Button variant="warning" onClick={() => alert('implement checkout')}>
         Checkout
     </Button>
         </div>  

    </>
)}

        </Card.Body>
      </Card>
      <br/>
      <br/>
      <br/>
        </div>
    )
}
