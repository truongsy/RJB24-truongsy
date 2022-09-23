import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from "./Home"
import Login from "./Login"
import Projects from './Projects'
import "./Style.css"


export default function ThucHanh() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}
