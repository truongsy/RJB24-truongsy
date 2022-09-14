import React from 'react'
import Column from './Column'
import "./main.css"

export default function chartmain() {

    function Text (props){
        return(
            <>
                <div className='item-visitor'>
                <h5>{props.title}</h5>
                <h1>{props.visitor}</h1>
            </div>
            </>
        )
    }
  return (
    <>
    <div className='main'>
        <div className='chart'>
            <div className='text-chart'>
                <Text title= "TODAY\'S VISITORS" visitor = "24,599"/>   
            </div>
            <div className='column-chart'>
                <Column/>    
            </div>
             
        </div>
        <div className='chart'>
            <div className='text-chart'>
                <Text title= "YESTERDAY\'S VISITORS" visitor = "15,699"/>    
            </div>
            <div className='column-chart'>
                <Column/>    
            </div>
             
        </div>
        <div className='chart'>
            <div className='text-chart'>
                <Text title= "TOTAL DOWNLOADS" visitor = "1,24,599"/>    
            </div>
            <div className='column-chart'>
                <Column/>    
            </div>
             
        </div>
        <div className='chart'>
            <div className='text-chart'>
                <Text title= "CURRENT INCOME" visitor = "$54,599"/>    
            </div>
            <div className='column-chart'>
                <Column/>    
            </div>
             
        </div>
    </div>
    
        
    </>
  )
}
