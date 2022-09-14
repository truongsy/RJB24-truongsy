import React from 'react'
import "./main.css"
import image from './2.jpg'
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
export default function BT02() {
  return (
    <>
        <div className='main'>
            <div className='product-first'>
                <div className='product-images'>
                    <img src={image} alt=""/>
                </div>
                <h3>YOUNG SHOP</h3>
            </div>
            <div className='product-second'>
                <h3>Samsung UHD TV 24inch</h3>
                <div className='star-icon'>
                <AiFillStar className='star-yellow'/>
                <AiFillStar className='star-yellow'/>
                <AiFillStar className='star-yellow'/>
                <AiFillStar className='star-yellow'/>
                <AiOutlineStar className='star'/>
                <span>02</span>
                </div>
                
                <p style={{fontWeight: 500}}>$599</p>
            </div>
            
        </div>
    </>
  )
}
