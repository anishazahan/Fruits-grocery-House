import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner-background'>
       <div className="container banner-content">
       <h2 className='banner-header'>Fresh Fruits as Your Best Choice <br/> for Your Healthy Life!! </h2>
        <p className='fw-normal text-white w-75 my-4 mb-5'>Horseshoe, lotus root, bamboo shoots, arrowroot, red cabbage, Chinese cabbage, etc. The base obtained the pollution-free origin certification of the Quality Safety Center. 20 years experience. directly manufacturer. Rapid quote response. particle uniform. good quality.</p>
        <Link to="/" className='banner-btn'>Get Started</Link>
       </div>
    </div>
  )
}

export default Banner