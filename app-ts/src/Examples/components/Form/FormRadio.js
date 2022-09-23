import React, { useState } from 'react'

export default function FormRadio() {
    const courses = [
        {
            id: 1,
            name: 'HTML',
            coin: 200
        },
        {
            id: 2,
            name: 'CSS',
            coin: 340
        },
        {
            id: 3,
            name: 'JavaScript',
            coin: 400
        },
        {
            id: 4,
            name: 'React',
            coin: 300
        },
    ]

    const [checked, setChecked] = useState()
    
    const handleRegister = () => {
        console.log(checked)
    }
  return (
    <div style={{padding: "10px"}}>
        {courses.map((course) => (
            <div key={course.id}>
                <input checked= {checked === course.id} type="radio" name="" value="" onChange={(e) => setChecked(course.id)}/>
                <label>{course.name} </label>
            </div>
        ))}
        <button type="button" onClick={handleRegister}>Register</button>
    </div>
  )
}
