import React from 'react'
import {Navbar,Basket,Main} from './components/index';
import {useState} from 'react'
import data from './data';

export default function Cart() {
  const {products} = data;
    const [cartItems,setCartItems] = useState([]);
    const onAdd = (product) =>{
        const exist = cartItems.find(x => x.id === product.id);
        if(exist){
          setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x )
          );
        }else{
         setCartItems([...cartItems, {...product, qty: 1}])
       }
      } 
    return (
        <div>
            <Navbar/>
            <Main onAdd={onAdd} products={products} />
            <Basket onAdd={onAdd} cartItems={cartItems}/>
          
        </div>
    )
}
