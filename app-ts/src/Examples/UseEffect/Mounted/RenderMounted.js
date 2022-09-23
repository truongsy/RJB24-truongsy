import React from 'react'
import Content from './Content'
import { useState } from 'react'
export default function RenderMounted() {
    const [show , setShow] = useState(false)
  return (
    <div>
        <button type="button" onClick={()=> setShow(!show)}>Show</button>
        {show && <Content/>}
    </div>
  )
}
