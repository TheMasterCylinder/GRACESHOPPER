import React from 'react';
import  CardUno  from './CardUno';

const Main = (props) => {

    const {products, onAdd} = props;

    return (
        <div className="Main">



{products.map((product)=>(
    <CardUno key={product.id} product={product} onAdd={onAdd} />
))}



        </div>
    )
}

export default Main 