import React from 'react'
import "./style.css"
import Form01 from "./FormContent/Form01"
import Form02 from "./FormContent/Form02"
import Form03 from "./FormContent/Form03"

export default function Content() {
  return (
    <div className='wrapper'>
        <Form01/>
        <Form02/>
        <Form03/>
    </div>
  )
}
