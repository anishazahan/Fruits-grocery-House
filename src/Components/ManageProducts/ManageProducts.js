import React, { useEffect, useState } from 'react'

const ManageProducts = () => {


    const [products,setProducts]= useState([]);
    useEffect( ()=>{
      fetch('http://localhost:5000/product')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products])

 
  const handleDelete= (id) => {
      console.log(id);
    fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
           
            
  });
  
  }


  return (

        <div className=" w-50 mx-auto table-responsive my-5">
            <table class="table ">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Supplier</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  { products.map(product => <tr>
      <td>{product.name}</td>
      <td>{product.price}$</td>
      <td>{product.quantity}</td>
      <td>{product.supplier}</td>
      <td> <button onClick={()=> handleDelete(product._id)}>Delete</button></td>
  </tr>)}

  
    
  </tbody>
</table>
        </div>
  )
}

export default ManageProducts