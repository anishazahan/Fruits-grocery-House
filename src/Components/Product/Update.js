import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

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
    <main className="min-h-[75vh] text-center">
    <h2 className="my-5">
      Product Details
    </h2>
      <div className="w-full flex items-center justify-center space-x-2 flex-col md:flex-row">
        <div className=" w-full max-w-lg">
          <img className="max-w-xs mx-auto" src={product.img} alt="" />
        </div>
        <div className="w-full max-w-lg text-center border px-4 sm:px-12 space-y-4 h-fit py-4 my-4">
          <div className="w-full flex justify-between ">
            <h2 className="text-md text-gray-500">Product:</h2>
            <h2 className="text-lg font-medium">{product.name}</h2>
          </div>
          <div className="w-full flex justify-between ">
            <h2 className="text-md text-gray-500">ID:</h2>
            <h2 className="text-sm font-medium">{product._id}</h2>
          </div>
          <div className="w-full flex justify-between ">
            <h2 className="text-md text-gray-500">Quantity:</h2>
            <h2 className="text-lg font-medium">{product.quantity == 0 ? 'sold-out' : product.quantity}</h2>
          </div>
          <div className="w-full flex justify-between ">
            <h2 className="text-md text-gray-500">Price:</h2>
            <h2 className="text-lg font-medium">${product.price}</h2>
          </div>
          <div className="w-full flex justify-between ">
            <h2 className="text-md text-gray-500">Supplier:</h2>
            <h2 className="text-lg font-medium">{product.supplier}</h2>
          </div>
         
          <div className="">
            <p className="text-justify">{product.description}</p>
          </div>
          <div className="flex flex-wrap space-x-4 space-y-4 justify-center items-center">
            <form
              onSubmit={restock}
              className=" border h-12 relative"
            >
              <input
                className="h-full text-center "
                type="number"
                name="name"
                min={0}
              />
              <button
                type="submit"
                className="bg-indigo-500 px-4 py-2 h-full text-white rounded font-medium"
              >
                Restock
              </button>
            </form>
            <button
              onClick={deliver}
              className=" bg-green-500 h-12 px-4 text-white rounded font-medium mt-6 md:mt-0"
            >
              delivered
            </button>
          </div>
        </div>
      </div>
      <Link className="block max-w-fit mx-auto px-12 py-3 my-8 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded shadow sm:w-auto focus:outline-none focus:ring" to="/product">
           <button>Manage Products</button>
          </Link>
  </main>
  )
}

export default Update