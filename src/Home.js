import React from 'react'
import './App.css';
import { Navbar,Hero,Main,Basket} from './components/index';
import data from './data';
import {useState} from 'react'


export default function Home() {
  const [cartItems,setCartItems] = useState([]);
  const {products} = data;
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
        <div className='App'>
            <Navbar />
      <header className="App-header">
     
        <Hero />
       
      </header>
     
      <Main onAdd={onAdd} products={products} />
      <Basket onAdd={onAdd} cartItems={cartItems}/>
        </div>
    )
    
}
