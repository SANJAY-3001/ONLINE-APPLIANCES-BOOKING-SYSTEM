import React from 'react';
import Scrollview from './Scrollview';
import './Scroll.css';
import iphone1 from '../assets/iphone1.jpg';
import tablet1 from '../assets/tablet1.jpg';
import water from '../assets/water.jpg';
import macbook from '../assets/macbook.jpg';
import fridge from '../assets/fridge.jpg';
import accessories from '../assets/accessories.jpg';
import headphones from '../assets/headphones.jpg';
import echodot from '../assets/echodot.jpg';
import iwatch from '../assets/iwatch.jpg';
import speaker from '../assets/speaker.jpg';
import oven from '../assets/oven.jpg';
import washingmachine from '../assets/washingmachine.jpg';

export default function Scroll() {
  const products = [
    { productName: 'Apple iPhone 13 (128GB)- Pink', price: '₹59000', image: iphone1 },
    { productName: 'OnePlus Pad(11.61 inch) LCD', price: '₹129987', image: tablet1 },
    { productName: 'Aqua d  Copper Water Purifier', price: '₹25999', image: water },
    { productName: 'Lenovo IdeaPad 5 Intel Core i7', price: '₹89990', image: macbook },
    { productName: 'Hisense 45 L Mini Refrigerator', price: '₹15900', image: fridge },
    { productName: 'POLAM-FOTO Camera Tripod', price: '₹75900', image: accessories },
   
  ];
  const products1 = [
    { productName: 'Zebronics Wired Headphone', price: '₹2990', image: headphones },
    { productName: 'Echo Dot (4th Gen)', price: '₹13900', image:  echodot},
    { productName: 'i7 Pro Max Smartwatch', price: '₹35860', image: iwatch},
    { productName: 'Marshall Wireless  Speaker', price: '₹7999', image: speaker },
    { productName: 'Panasonic Microwave Oven', price: '₹27990', image: oven},
    { productName: 'LG 6.5 Kg 5 Star Inverter ', price: '₹14500', image: washingmachine },
   
  ];

  return (
    <div className='main-scroll'>
      <h1>TOP SELLER</h1>
      <div className='scrollmenu'>
        {products.map((product, index) => (
          <div className='ScrollProduct' key={index}>
            <Scrollview {...product} />
          </div>
        ))}
      </div>
      <h1>NEW LAUNCHES</h1>
      <div className='scrollmenu'>
        {products1.map((product, index) => (
          <div className='ScrollProduct' key={index}>
            <Scrollview {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
