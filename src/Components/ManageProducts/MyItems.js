import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const MyItems = () => {

    const [user,loading]=useAuthState(auth);
    const [products,setProducts]= useState([]);
    
    useEffect( ()=>{
      fetch(`http://localhost:5000/product?email=${user.email}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [ products,user.email])


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
        if(loading){
            return <p className='text-center my-5'>Loading</p>
        }



  return (
    <div className=" w-50 mx-auto table-responsive my-5">
            <h3 className='text-center'>My Items</h3>
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

export default MyItems