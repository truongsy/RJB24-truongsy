import React from 'react'
import "./Blog.css"
import {FaFacebookF} from "react-icons/fa"
export default function Blog() {
    var array = [
        {
            iconName: 'FaFacebookF',
            name: 'Facebook',
            number: '5,000,000',
            unit: 'Likes',
            color: 'blue',
        },
        {
            iconName: 'FaFacebookF',
            name: 'Twitter',
            number: '40,000',
            unit: 'Tweets',
            color: 'aqua',
        },
        {
            iconName: 'FaFacebookF',
            name: 'Google +',
            number: '460,000',
            unit: 'Plus',
            color: 'orange',
        },
        {
            iconName: 'FaFacebookF',
            name: 'Pinterest',
            number: '34,000',
            unit: 'Pins',
            color: 'red',
        },
    ]

    const showBlog = (object) => {
        return (
            <div className='main' style={{backgroundColor: object.color}}>
                <div className='icon-blog'>
                    < FaFacebookF/>
                </div>
                <div className='list-blog'>
                    <h2 >{object.name}</h2>
                    <small>{object.number} {object.unit}</small>
                </div>
            </div>
        )
    }
  return (
    <div className='wrapper'>
        {array.map((input) => {
            return showBlog(input)
        })}
    </div>
  )
}
