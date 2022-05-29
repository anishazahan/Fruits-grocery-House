import React from 'react'
import { Link } from 'react-router-dom'
import about from "../../img/supermarket-949913_960_720.webp"
import "./About.css"

const About = () => {
  return (
    <div className='about-margin' >
        <h3 className='text-center about-heading'>About Us</h3>
        <div className="container mb-5">
            <div className="row">
                <div className="col-lg-8">
                    <img className='img-fluid rounded' src={about} alt="" />
                </div>
                <div className="col-lg-4">
                    <h3 className='heading my-5 mb-3'>
                    The Finest Quality Fruits & Vegetables Supplier for Fast Delivery
                    </h3>
                    <p className='mb-5'>For the last 10 years Igloo has committed itself to delivering an exceptional refrigerated delivery service. With an ever increasing list of satisfied clients our expanding delivery network is growing from strength to strength.</p>
                    <Link to="/" className='explore-btn'> Explore Now</Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About