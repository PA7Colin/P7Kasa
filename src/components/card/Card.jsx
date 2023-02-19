import React from 'react'

import "../card/card.scss";
import Appart from './Appart'

function Card() {
  return (
    <article className='grid'>
      <Appart />
      <Appart />
      <Appart />
      <Appart />
      <Appart />
      <Appart />
    </article>
  )
}

export default Card