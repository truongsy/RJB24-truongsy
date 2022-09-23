import React, { useState } from 'react'

export default function ToDoList() {
// lấy data từ storage ra console: sử dụng getItem
// dùng parse để chuyển chuỗi thành mảng array

    // const storageJob = JSON.parse(localStorage.getItem('Jobs'))

    
    // useState input
    const [job , setJob] = useState('')
    // useState todolist( hiện danh sách cần làm ở UI)
    // ?? toán tử nullist khi storageJob là null hoặc undef => []
    //  khác với toán tử || storageJob ?? []
    const [jobs ,setJobs] = useState(() => {
        const storageJob = JSON.parse(localStorage.getItem('Jobs'))
        console.log(storageJob)
        return storageJob
    })
    
    // Hàm xử lý Submit
    const handleSubmit = () => {
        setJobs(pre => {
            const newJobs = [...pre, job]

            const jsonJobs = JSON.stringify(newJobs)

            localStorage.setItem('Jobs', jsonJobs)
            return newJobs
        })
        setJob('')
    }
  return (
    <div style={{margin: "10px", border : "1px solid #ccc",}}>
        <input value={job} onChange={e => setJob(e.target.value)} />
        <button onClick={handleSubmit}>ADD</button>
        <ul>
            {jobs.map((input,index) => (
// Khi sử dụng map, phải truyền key vào thẻ cha lớn nhất/ 
                <li key={index}>{input}</li>
            ))}
        </ul>
    </div>
  )
}
