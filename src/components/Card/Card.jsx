import React from 'react'
import './Card.css'

const Card = ({ robot: { id, name, username, email } }) => {

  return (
    <div className="card">
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <div className="card-info">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}


export default Card

