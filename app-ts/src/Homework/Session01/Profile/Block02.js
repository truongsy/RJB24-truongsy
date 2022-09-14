import React from 'react'
import "./main.css"

import { AiFillStar } from "react-icons/ai";
// import { DiCss3 } from "react-icons/di";
export default function Block02() {
    let arrayNew = [
        {   
          icon: 'AiFillStar',
          name: 'HTML',
          percent: '60%',
          color: 'green',
        },
        {   
          icon: 'AiFillStar',
          name: 'CSS',
          percent: '30%',
          color: 'red',
        },
        {   
          icon: 'AiFillStar',
          name: 'PHP',
          percent: '70%',
          color: 'blue',
        },
        {   
          icon: 'AiFillStar',
          name: 'Java',
          percent: '89%',
          color: 'yellow',
        },
        {   
          icon: 'AiFillStar',
          name: '.Net',
          percent: '58%',
          color: 'violet',
        },
    ]
    const showInfo = (child) => {
     
      return (
        <>
        <div className='post'>
          <div className='post-list'>
            <div className='list-icon'>
            <AiFillStar/>
            </div>
            <div className='list-text'>{child.name}</div>
          </div>
          <div className='post-percent'>
            <div style={{width: child.percent , backgroundColor: child.color}}></div>
          </div>
        </div>
        </>
      )
    };
  


  return (
    <div className='main'>
    {arrayNew.map((value) => {
      return showInfo(value)
    })}
    </div>
  )
}
