import React from 'react'
import './App.css';
import { Navbar,Hero,Main,Basket,Footer } from './components/index';
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
    
const onRemove = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if(exist.qty === 1){
    setCartItems(cartItems.filter((x) => x.id !== product.id))
  }else{
    setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty -1} : x )
    );
  }
}

    return (
        <div >
           
      <header className='header' >
     
      <Navbar countCartItems={cartItems.length}/>
       
      </header>
      <Hero />
      <Main onAdd={onAdd} products={products} />
     
      <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>

      <Footer/>
     
        </div>
    )
    
}
