import React from 'react'
import "./main.css"
import image from './2.jpg'

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
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span>02</span>
                <p>$599</p>
            </div>
            
        </div>
    </>
  )
}
