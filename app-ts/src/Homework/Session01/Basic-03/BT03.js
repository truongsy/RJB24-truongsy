import React from 'react'
import "./style.css"
import studio from './3.jpg'
export default function BT03() {
  return (
    <>
        <div className='main'>
            <div className='product-item'>
                <img src={studio} alt=""/>
            </div>
            <div className='product-items'>
                <small>Technology</small>
                <br/>
                <h4>Harman Kadon Onyx Studio Mini, Review & Experiences</h4>
                
                <small>Feb 21, 2021 by drfurion</small>
            </div>
        </div>
    </>
  )
}
