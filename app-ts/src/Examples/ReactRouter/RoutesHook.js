import React from 'react'
import Navi from "./Pages/Navi"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import "./style.css"

import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function RoutesHook() {
  return (
    <>
      <BrowserRouter>
        <Navi/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Link' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

