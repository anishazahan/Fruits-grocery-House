import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {

    const {id}= useParams();

    const [product,setProducts]= useState({});
    
    useEffect( ()=>{
      fetch(`http://localhost:5000/product/${id}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])

console.log(product);
    
  return (
    <div>
        {/* <h1>{id}</h1>
        <h2>{product.name}</h2> */}
    </div>
  )
}

export default Update