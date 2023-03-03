import React, { useEffect, useState } from 'react'

import "../card/card.scss";
import AppartHome from './AppartHome'



function Card() {
  const [apartments, setHousing] = useState([]);
  useEffect(appartApi, []);
  
  function appartApi() {
    fetch('logements.json')
    .then((res) => res.json())
    .then((res) => setHousing(res))
    .catch(console.error);
  } 

  return (
    <article className='grid'>

      {apartments.map((apartment) => (

        <AppartHome title={apartment.title} imageUrl={apartment.cover} id={apartment.id}/>

      ))}

    </article>
)
}
export default Card

