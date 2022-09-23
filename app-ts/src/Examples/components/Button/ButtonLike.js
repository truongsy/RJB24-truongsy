import React, { useState } from 'react'
import {AiFillLike ,AiFillDislike,AiFillStar} from "react-icons/ai"
import img1 from "./1.jpg"
import img2 from "./2.jpg"
import img3 from "./3.jpg"
import img4 from "./4.jpg"
import img5 from "./5.jpg"

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
    const [rate , setRate] = useState()

    let arrayRate = [1,2,3,4,5]

    const handlerA = ()=> {
        setRate("yellow")
    }
    // var arrayImage = [
    //     "./1.jpg",
    //     "./2.jpg",
    //     "./3.jpg",
    //     "./4.jpg",
    //     "./5.jpg",
        
    // ]
  return (
    <div style={{textAlign: "center"}}>
        <div>
            {button}
        </div>
        <button onClick={handlButtonL} style={{color: "blue", margin: "10px"}} type=""><AiFillLike/></button>
        <button onClick={handlButtonD} style={{color: "blue", margin: "10px" }} type=""><AiFillDislike/></button>
        <button onClick={handlButtonC} style={{color: "blue", margin: "10px" }} type="">No comment</button> <br/>
        <AiFillStar onClick={handlerA} color= {rate}/>
        <AiFillStar onClick={handlerB} color= {rate}/>
        <AiFillStar onClick={handlerC} color= {rate}/>
        <AiFillStar onClick={handlerD} color= {rate}/>
        <AiFillStar onClick={handlerE} color= {rate}/>
{/* s*/}
        {/* <div>
            <img src={arrayImage[0]} alt="">
        </div> */}
        {arrayRate.map((item) => {
            if (item <= rate){
                return (
                    <AiFillStar onClick={handlerA} color= {rate}/>
                )
            }
        })}
        
    </div>
  )
}
