import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import MyCarousel from './MyCarousel'
import Products from './Products'
import ProductsMain from './ProductsMain'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <MyCarousel></MyCarousel>
    <ProductsMain></ProductsMain>
    {/*<Footer></Footer>*/}
    </div>
  )
}
