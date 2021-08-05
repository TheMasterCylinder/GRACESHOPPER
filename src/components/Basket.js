import React from 'react'
import Button from 'react-bootstrap/Button'

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    
    return (
        <div className="Basket">
            
<div>
    {cartItems.length === 0 && <div>This cart is empty :(</div>}
    {cartItems.map((item) => (
        <div key={item.id} className='row'>
            <div>{item.name}</div>
            <div>
            <Button variant="warning" onClick={()=>onAdd(item)}>+</Button>{' '}
            <Button variant="primary" onClick={()=>onRemove(item)}>-</Button>{' '}     
            </div>
            <div>
                {item.qty} x ${item.price.toFixed(2)}
            </div>
        </div>
    ))}
</div>

        </div>
    )
}
