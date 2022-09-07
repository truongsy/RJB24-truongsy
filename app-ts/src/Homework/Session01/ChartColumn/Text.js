import React from 'react'

export default function Text() {
 
  var course = [
    {
      name: 'TODAY\'S VISITORS',
      number: '24,599'
    },
    {
      name: 'YESTERDAY\'S VISITORS',
      number: '15,699'
    },
  ]

  const showInfo = (object) => {
    return (
      <>
        <h4> {object.name}</h4>
        <h3> {object.number}</h3>
      </>
    )
  }

  return (
    <>
        {course.map((item) => {
          return showInfo(item)
        })}
    </>
  )
}
