import React, {useState} from 'react'
export default function Login() {
    const UserName = "admin"
    const Passwordd = "admin"
    const [text , setText] = useState("")
    const [password , setPassword] = useState("")
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (UserName === text && Passwordd === password){
            console.log(text)
            console.log(password)
        } else{
            alert('Thông tin không chính xác. Xin thử lại')
        }
        
    }
    
  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
            <input
                type={"text"}
                onChange={e => setText(e.target.value)}
            /> <br/>
            <input
                type={"password"}
                onChange={e => setPassword(e.target.value)}
            /> <br/>
            <button type='submit' className= "btn btn-primary form-control">Login</button> 
        </form>

    </div>
  )
}
