import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import './products.css'

const Product = () => {

  const [products,setProducts]= useState([]);
  useEffect( ()=>{
    fetch('http://localhost:5000/product')
    .then(res => res.json())
    .then(data => setProducts(data));
}, [])


  return (
    <div id="products" className='container mx-auto mb-5'>
       <h4 className='products-heading text-center mt-5 mx-auto'> Our Products</h4>
       <p className='mx-auto text-center w-50'>No matter the time of year, nothing evokes the sweet sensations of summer like a thick slice of ripe, juicy, colourful fruits. </p>
    <div className="row max-width ">
   
    
        {
            products.map(singleProduct => <SingleProduct key={singleProduct.id} singleProduct={singleProduct}></SingleProduct>)
        }
        </div>


        
    </div>
  )
}

export default Product