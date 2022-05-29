import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FaFacebookSquare,FaLinkedinIn,FaTwitterSquare,FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-background py-5'>
        <div className="container text-color d-flex flex-row justify-content-around">
            <div className="">
            <h4>Follow Us</h4>
            <div className="d-flex flex-row">
                <FaFacebookSquare className='icon'></FaFacebookSquare>
                <FaLinkedinIn className='icon'></FaLinkedinIn>
                <FaTwitterSquare className='icon'></FaTwitterSquare>
                <FaYoutubeSquare className='icon'></FaYoutubeSquare>
            </div>
            </div>
            <div className=" d-flex flex-column">
                <Link className='footer-link' to="/">Contact Us</Link>
                <Link className='footer-link' to="/">Blog</Link>
                <Link className='footer-link' to="/">Products</Link>
                <Link className='footer-link' to="/">About Us</Link>
            </div>

        </div>
    </div>
  )
}

export default Footer