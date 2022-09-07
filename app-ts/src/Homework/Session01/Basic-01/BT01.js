import React from 'react'
import "./styles.css"
import images from './1.jpg'
export default function BT01() {
  return (
    <>
      <div className='main' style={{border: "2px solid #ccc"}}>
          <div className='image-clothing'>
            <img src={images} alt="clothing"/>
          </div>
          <div className='item-clothing'>
            <h1>Clothing & Apparel</h1>
            <p>Accessories</p>
            <p>Bags</p>
            <p>Kid's Fashion</p>
            <p>Mens</p>
          </div>
      </div>
    </>
    
  )
}
