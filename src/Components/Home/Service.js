import React from 'react'
import './Service.css'

const Service = () => {
  return (
    <div className='container text-center'>
        <h3 className=' fw-bolder'>Why Our Customers Partner With Us:</h3>
        <h5 className='fw-bold text-success'>services</h5>
        <div className="row">
            <div className="col-md-2 col-lg-4 mt-5">
                <img src="https://augustafruit.com/wp-content/uploads/2015/09/1000-x-667-Citrus-300x200.jpg" alt="" />
                <h4 className=' my-3 service-heading'>The Finest Quality Fruits & Vegetables</h4>
                <p>Our business is produce and freshness is key. Joe frequents the Ontario Food and we import specialty items to ensure our customers get the best products available.</p>
            </div>
            <div className="col-md-2 col-lg-4 mt-5">
                <img src="https://augustafruit.com/wp-content/uploads/2015/10/VEGGIES-ONE-shutterstock-1000-X-667-300x200.jpg" alt="" />
                <h4 className=' my-3 service-heading'>Product Selection Second <br/> to None</h4>
                <p>Our business is produce and freshness is key. Joe frequents the Ontario Food and we import specialty items to ensure our customers get the best products available.</p>
            </div>
            <div className="col-md-2 col-lg-4 mt-5">
                <img className='mb-4' src="https://augustafruit.com/wp-content/uploads/2015/10/PassionFruitIMG-1000-x--300x162.jpg" alt="" />
                <h4 className=' my-3 service-heading py-2'>Flexible & Dependable <br/>  Service</h4>
                <p>Our business is produce and freshness is key. Joe frequents the Ontario Food and we import specialty items to ensure our customers get the best products available.</p>
            </div>
        </div>
    </div>
  )
}

export default Service