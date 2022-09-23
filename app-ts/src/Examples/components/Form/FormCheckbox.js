import React, { useState } from 'react'

export default function FormCheckbox() {
    
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
    const [checked , setChecked] = useState([])
    
        
    const handlerSubmit = () => {
        console.log(checked)
    }
    const handleChecked = (id) => {
       
        setChecked(pre => {
            const isChecked = checked.includes(id)
            if(isChecked) {
                return checked.filter(item => item !==id)
            } else {
                return [...pre ,id]
            }
        })
    }
  return (
    <div>
        {courses.map((course) => (
            <div key={course.id} >
                <input 
                    checked={checked.includes(course.id)}
                    type="checkbox"
                    onChange={() => handleChecked(course.id)}
                />
                <label>{course.name}</label>
            </div>
        ))}
        <button onClick={handlerSubmit} type="button">Register</button>
    </div>
  )
}
