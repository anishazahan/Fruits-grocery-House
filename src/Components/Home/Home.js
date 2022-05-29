import React from 'react'
import Product from '../Product/Product'
import About from './About'
import Banner from './Banner'
import Service from './Service'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Product></Product>
      <About></About>
    </div>
  )
}

export default Home