import React from 'react';
import  CardUno  from './CardUno';

const Main = (props) => {

    const {products} = props;

    return (
        <div className="Main">

<h1>PRODUCTS</h1>

{products.map((product)=>(
    <CardUno key={product.id} product={product} />
))}



        </div>
    )
}

export default Main 