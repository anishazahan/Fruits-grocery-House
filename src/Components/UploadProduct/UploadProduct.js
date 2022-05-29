import React from 'react'




const UploadProduct = () => {

 function uploadProduct (e){

  e.preventDefault();
  const name = e.target.name.value;
  const supplier = e.target.supplier.value;
  const email = e.target.email.value;
  const price = e.target.price.value;
  const unit = e.target.unit.value;
  const quantity = e.target.quantity.value;
  const QuantityUnit  = e.target.QuantityUnit.value;
  const img = e.target.img.value;
  const description = e.target.description.value;
  const category = e.target.category.value;
  const product = {name,supplier,price,unit,quantity,QuantityUnit,img,description,category,email};
  console.log(product);

  fetch ('https://young-refuge-85297.herokuapp.com/product',{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(product)
  })
  .then (res=>res.json())
  .then(data =>{
    if(data.acknowledged){
      e.target.reset();
    }
  })


  
 }



  return (
    <div>

<form className='w-50 mx-auto my-5' onSubmit={uploadProduct}>
 
  <div className="form-outline mb-4 ">
  <label className="form-label" htmlFor="form4Example1">Name</label>
    <input type="text" id="form4Example1" name='name' className="form-control" />
    
  </div>

  
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form4Example2">Supplier</label>
    <input type="text" id="form4Example2" name='supplier' className="form-control" />
   
  </div>
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form4Example2">Email</label>
    <input type="email" id="form4Example2" name='email' className="form-control" />
   
  </div>
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form4Example2">Price</label>
    <input type="number" id="form4Example2" name='price' className="form-control" />
   
  </div>
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form4Example2">Unit</label>
    <input type="text" id="form4Example2" name='unit' className="form-control" />
   
  </div>
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form4Example2">Img</label>
    <input type="text" id="form4Example2" name='img' className="form-control" />
   
  </div>
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form4Example2">Catagoery</label>
    <input type="text" id="form4Example2" name='category' className="form-control" />
   
  </div>
 
  
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form4Example2">Quantity</label>
    <input type="number" id="form4Example2" name='quantity' className="form-control" />
   
  </div>
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form4Example2">Quantity Unit</label>
    <input type="text" id="form4Example2" name='QuantityUnit' className="form-control" />
   
  </div>

 
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form4Example3">Description</label>
    <textarea className="form-control" id="form4Example3" name='description' rows="4"></textarea>
   
  </div>

 
  

 
  <button type="submit" className="btn btn-primary btn-block mb-4">Upload</button>
</form>
    </div>
  )
}

export default UploadProduct