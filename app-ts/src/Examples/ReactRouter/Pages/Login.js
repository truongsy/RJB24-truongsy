import React, { useState } from 'react'

export default function Link() {
  const User_Name = "123@gmail.com"
  const User_Password = "123456"
  const [res , setRes] = useState(false)
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(email === User_Name && password === User_Password){
      setRes(true)
    }else{
      setRes(false)
  }
  } 

  const handleChange = (e) => {
    if(e.target.name === 'inputEmail') setEmail(e.target.value)
    if(e.target.name === 'inputPassword') setPassword(e.target.value)
  }
  return (
    <div style={{padding: "5px"}}>
      <h5>Your Email:</h5>
      <form onSubmit={handleSubmit}>
        <input 
          name='inputEmail'
          type={"email"}
          placeholder={"Please enter email"}
          onChange = {handleChange}
        /> <br/>
        <input 
          name='inputPassword'
          className='mt-2'
          type={"password"} 
          onChange = {handleChange}
        /> <br/>
        <span>{res ? "Thanh cong" : "Sai roi"}</span> <br/>
        <button className='btn btn-primary mt-2' type="submit">Enter</button>
      
      </form>
    </div>
  )
}
