import React from 'react'
import { Link } from 'react-router-dom'

function AppartHome(props) {
  return (

    <Link className='housingLink' to='/housing' state={{apartId: props.id}}>
      <div className='appartCard'>
        <img src={props.imageUrl} alt="Housing cover" />
        <p className='appartCard__subtitle'>{props.title}</p> 
      </div>
    </Link>
)
}

export default AppartHome