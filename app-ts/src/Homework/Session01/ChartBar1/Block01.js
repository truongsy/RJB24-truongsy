import React from 'react'
import "./style.css"
export default function block01() {
  
    let array = [
        {
            name: 'BANDWIDTH',
            id: '20%',
            color: 'red',
            colorpercent: 'rgb(238, 54, 54)'
        },
        {
            name: 'STORAGE',
            id: '50%',
            color: 'rgb(40, 117, 168)',
            colorpercent: 'rgb(54, 164, 238)'
        },
        {
            name: 'USERS',
            id: '70%',
            color: 'green',
            colorpercent: 'rgb(102, 230, 102)'
        },
        {
            name: 'VISITORS',
            id: '30%',
            color: 'yellow',
            colorpercent: 'rgb(204, 204, 90)'
        },
        {
            name: 'EMAILS',
            id: '45%',
            color: 'violet',
            colorpercent: 'rgb(211, 135, 211)'
        },
        {
            name: 'BASIC',
            id: '80%',
            color: 'rgb(245, 112, 134)',
            colorpercent: 'pink'
        },
        {
            name: 'OTHERS',
            id: '37%',
            color: 'blue',
            colorpercent: 'rgb(69, 69, 212)'
        },
    ]
    // for (let index = 0; index < array.length;index ++){
    //     let items = array[index];
    //     showInfo(items)
    // }
    // {array.map((items) => {
    //     return showInfo(items)
    // })}

   

    const showInfo = (object) => {
        return (
            <>
            <div className='main' style={{border: "1px solid #ccc", background:"#ccc"}}>
                <div style={{background: object.color, height: "100%"}} className='product-item1'>
                    <h4>{object.name}</h4>
                </div>
                <div className='product-item2'>
                    <div className='product-percent' style={{background: object.colorpercent, height: "100%", width: object.id}}>
                        <h4>{object.id}</h4>
                    </div>
                </div>
                
            </div> 
            <br/>
            </>
        )
    }

  return (
    <>
       
        {/* {showInfo(array[0])} <br/>
        {showInfo(array[1])} <br/>
        {showInfo(array[2])} */}
        {array.map((items) => {
            return showInfo(items)
        })}
      

    </>
    
  )
}
