import React from 'react';
import productImage1 from '../assets/products.jpg';
import productImage2 from '../assets/logbg.png';
import KitchenSinkExample from './Products';
import './ProductsMain.css'; 

export default function ProductsMain() {
  return (
      <div className='card-container'>
      <h1>TOP SELLER</h1>
      <div className='card-row1'>
      <KitchenSinkExample productImage={productImage1} />
      <KitchenSinkExample productImage={productImage2} />
      <KitchenSinkExample productImage={productImage2} />
      <KitchenSinkExample productImage={productImage2} />
      </div>
      <h1>TOP SELLER</h1>
      <div className='card-row2'>
        <KitchenSinkExample productImage={productImage1} />
        <KitchenSinkExample productImage={productImage2} />
        <KitchenSinkExample productImage={productImage2} />
        <KitchenSinkExample productImage={productImage2} />
      </div>
    </div>
  );
}
