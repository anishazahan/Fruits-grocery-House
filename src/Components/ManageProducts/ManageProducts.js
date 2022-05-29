import React, { useEffect, useState } from 'react'

const ManageProducts = () => {


    const [products,setProducts]= useState([]);
    useEffect( ()=>{
      fetch('http://localhost:5000/product')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])
  return (

        <div className=" W-50 mx-auto">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Supplier</th>
    </tr>
  </thead>
  <tbody>
        
    
  </tbody>
</table>
        </div>
  )
}

export default ManageProducts