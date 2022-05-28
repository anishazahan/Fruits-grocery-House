import React from 'react'
import Product from '../Product/Product'
import Banner from './Banner'
import Service from './Service'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Product></Product>
    </div>
  )
}

export default Home