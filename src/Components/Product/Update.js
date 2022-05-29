import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./update.css"

const Update = () => {

    const {id}= useParams();

    const [product,setProducts]= useState({});
    
    useEffect( ()=>{
      fetch(`https://young-refuge-85297.herokuapp.com/product/${id}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [product,id])


  const deliver = () => {
    const newQuantity = parseInt(product.quantity) - 1;
    fetch(`https://young-refuge-85297.herokuapp.com/product/${id}`,{
      method:'PUT',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({newQuantity})
    })
      .then(res => res.json())
      .then(data => setProducts(data));
  };
 
  const restock = (e) => {
    e.preventDefault();
    let restockValue = e.target.name.value;
    const newQuantity = parseInt(restockValue) + parseInt(product.quantity);
    fetch(`https://young-refuge-85297.herokuapp.com/product/${id}`,{
      method:'PUT',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({newQuantity})
    })
      .then(res => res.json())
      .then(data => setProducts(data));
    e.target.reset();
  };



    
  return (
    <main className="mb-5">
    <h2 className="my-5 text-center update-heading">
      Product Details
    </h2>
    <div className="container">
      <div className="row">
        <div className=" col-lg-6">
          <img className="mx-auto rounded img-fluid" src={product.img} alt="" />
        </div>
        <div className="col-lg-6 text-left">
          
            <h6 className="my-3">Product:{product.name}</h6>
            <h6 className="">ID:{product._id}</h6>
            <h6 className="">Price:{product.price}$</h6>
            <h6 className="">Quantity:{product.quantity == 0 ? 'sold-out' : product.quantity}</h6>
            <h6 className="">Supplier:{product.supplier}</h6>
            <p className="text-justify">Description:{product.description}</p>

          <div className="">
            <form
              onSubmit={restock}
              className=""
            >
              <input
                className="h-full text-center "
                type="number"
                name="name"
                min={0}
              />
              <button
                type="submit"
                className="fw-bold btn btn-success restock"
              >
                Restock
              </button>
            </form>
            <button
              onClick={deliver}
              className="btn btn-success"
            >
              delivered
            </button>
          </div>
          </div>
        </div>
      </div>
     
  </main>
  )
}

export default Update