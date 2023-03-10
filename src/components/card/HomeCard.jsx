import React, { useEffect, useState } from 'react'

import "../card/card.scss";
import Appart from './Appart'



function HomeCard() {
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

        <Appart key={apartment.id} title={apartment.title} imageUrl={apartment.cover} id={apartment.id}/>

      ))}

    </article>
)
}
export default HomeCard

