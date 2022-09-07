import React from 'react'

export default function Column() {

  var column = [
    {
      day: 'MON',
      percent: '20%',
      color: 'Red'
    },
    {
      day: 'TUE',
      percent: '16%',
      color: 'green'
    },
    {
      day: 'WEB',
      percent: '57%',
      color: 'orange'
    },
    {
      day: 'THU',
      percent: '75%',
      color: 'blue'
    },
    {
      day: 'FRI',
      percent: '64%',
      color: 'yellow'
    },
  ]

  const newColumn = (object) =>{
    return (
      <>
        <div className="container">
          <div className="container-column">
            <div
              style={{
                background: object.color,
                height: object.percent,
                width: "20px",
                borderColor: object.color,
              }}
            ></div>
            <div style={{ height: 100 % -object.percent, width: "20px" }}></div>
          </div>
          <div className="container-item">
            <span>{object.day}</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {column.map((input)=> {
        return newColumn(input)
      })}
    </>
  )
}
