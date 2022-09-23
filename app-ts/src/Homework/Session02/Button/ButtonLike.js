import React from 'react'
import { useState } from 'react'
import {AiFillLike ,AiFillDislike} from "react-icons/ai"

export default function ButtonLike() {
      const [button , setButton] = useState("Your Comment");
    
    const handlButtonL = () => {
        setButton(<AiFillLike style={{color: "blue", margin: "10px"}}/>)
        // setButton(<AiFillDislike style={{color: "blue", margin: "10px"}}/>)
    }
    const handlButtonD = () => {
        setButton(<AiFillDislike style={{color: "blue", margin: "10px"}}/>)
        // setButton(<AiFillDislike style={{color: "blue", margin: "10px"}}/>)
    }
    const handlButtonC = () => {
        setButton("No comment")
        // setButton(<AiFillDislike style={{color: "blue", margin: "10px"}}/>)
    }
    
  return (
    <div> 
        <div>{button}</div>
        <button onClick={handlButtonL} style={{color: "blue", margin: "10px"}} type=""><AiFillLike/></button>
        <button onClick={handlButtonD} style={{color: "blue", margin: "10px" }} type=""><AiFillDislike/></button>
        <button onClick={handlButtonC} style={{color: "blue", margin: "10px" }} type="">No comment</button> <br/>
    </div>
  )
}
