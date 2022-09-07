import React from 'react'
import Text from './Text'
import Column from './Column'
import "./main.css"

export default function chartmain() {
  return (
    <>
    <div className='main'>
        <div className='chart'>
            <div className='text-chart'>
                <Text/>   
            </div>
            <div className='column-chart'>
                <Column/>    
            </div>
             
        </div>
        <div className='chart'>
            <div className='text-chart'>
                <Text/>    
            </div>
            <div className='column-chart'>
                <Column/>    
            </div>
             
        </div>
        <div className='chart'>
            <div className='text-chart'>
                <Text/>    
            </div>
            <div className='column-chart'>
                <Column/>    
            </div>
             
        </div>
        <div className='chart'>
            <div className='text-chart'>
                <Text/>    
            </div>
            <div className='column-chart'>
                <Column/>    
            </div>
             
        </div>
    </div>
    
        
    </>
  )
}
