import React from 'react'
import Card from '../Card/Card.jsx'
import './CardList.css'

const CardList = ({ robots }) => {
  const cardsArray = robots.map((robot) => {
        return <Card key={robot.id} robot={robot} />
      });

  return (
    <>
    {
      cardsArray != 0 ?
      <div className="cardlist-container">
         { cardsArray != 0 ? cardsArray : <h2>No robot found</h2>}
      </div>
      :
      <div className="robot-not-found">
        <p>Robot not found</p>
      </div>
    }
    </>
  )
}

export default CardList