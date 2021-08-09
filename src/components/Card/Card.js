import React from 'react'
import "./Card.css"

function Card({avatar,id,name,gender}) {
    return (
        <div className="card">
         <hr/>
         <hr/>
        <img src={avatar} alt="front profile"></img>
        <div className="datos">
        <p>{id}</p>
        <p>{name}</p>
        <p>{gender}</p>
        </div>
        <hr/>
        <hr/> 
        </div>
    )
}

export default Card
