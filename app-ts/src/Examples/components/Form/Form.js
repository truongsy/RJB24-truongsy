import React, { useState } from "react";
// import { useState } from "react";
export default function Form() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
    
  const handleClick = () => {
    console.log({
      name,
      email
    })
  }
  return (
    <div style={{ padding: "10px" }}>
      <label htmlFor="name">Name: </label>
      <input 
        value={name}  
        id="name"
        type="text"  
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        value={email}  
        id="name"
        type="email"  
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleClick} type="button">OnChange</button>
      
    </div>
  );
}
