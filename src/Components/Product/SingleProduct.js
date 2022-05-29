import React from 'react'
import { Link } from 'react-router-dom';
import './products.css'

const SingleProduct = ({singleProduct}) => {
    const {img,name,supplier,price,description,unit,QuantityUnit,quantity,_id} = singleProduct;
    console.log(_id);
  return (
    <div className='col-md-2 col-lg-4 shadow mt-5'>
        <img className='images rounded' src={img} alt="" />
        <div className="px-3 py-4">
        <h5 className='heading'>{name}</h5>
        <h6>Supplier: {supplier}</h6>
        <h6>Quantity: {quantity} {QuantityUnit}</h6>
       
            <div className="d-flex flex-row justify-content-between">
            <h6 className='mr-5'>Price: <span className='price py-3'>{quantity}$</span>{unit}</h6>
                <Link to={`/purchase/${_id}`} className='updateBtn ml-5'>Buy Now</Link>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct