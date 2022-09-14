import React from 'react'
import "./person.css"
// import person from './3.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Person() {

    var arrayPerson = [
        {
            id: '1',
            image: 'person',
            name: 'ROBORT PATTISON',
            job: 'Developing',
        },
        {
            id: '2',
            image: 'person',
            name: 'JAMES SMITH',
            job: 'Designer',
        },
        {
            id: '3',
            image: 'person',
            name: 'TOM HANKS',
            job: 'UI Designer',
        },
        {
            id: '4',
            image: 'person',
            name: 'SILVESTER STALIN',
            job: 'Testing',
        },
    ]
// var arrayEmail = [
//     {
//         color: 'orange',
//         name: 'Email ID',
//         address: 'peter1@gmail.com'
//     }
// ]
let imagePerson = new Date()
        console.log(imagePerson.getDay())
    const showInfoPerson = (object) => {
        
        return(
           <>
            <div className='card main' style={{width:"400px"}}>
                <div className='post'>
                    <img className= 'card-img-top' src={imagePerson} alt="cardImage"></img>
                    <div className='card-body'>
                        <h5 className='card-title'>{object.name}</h5>
                        <p className='card-text'>{object.job}</p>
                    </div>
                </div>
                <label htmlFor="rt">Email: </label>
                <input id="rt" name="" placeholder='Nhập email của bạn'/>
            </div>
           </>
        )
    }
  return (
    <>
    <div className='wrapper'> 
    {arrayPerson.map((input) => {
        return showInfoPerson(input)
    })}
    
    </div>

    </>
  )
}
