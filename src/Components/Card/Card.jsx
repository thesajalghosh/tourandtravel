import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
    <div> <img src={props.image} className='card__image'/></div>
    <div className='card__heading'>
        {props.title}
    </div>
    <div className='card__description'>{props.des}</div>


    </div>
  )
}

export default Card
