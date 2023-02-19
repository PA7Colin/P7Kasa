import React from 'react'
import { Link } from 'react-router-dom'

function Appart() {
  return (
    <Link className='housingLink' to='/housing'>
      <div className='appartCard'>
        <p className='appartCard__subtitle'>Titre de la location</p> 
      </div>
    </Link>
)
}

export default Appart