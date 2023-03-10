import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import '../gallery/gallery.scss'

import Collapse from '../collapse/Collapse'
import Carrousel from '../carrousel/Carrousel'
import UserHeader from '../tag/UserHeader'

function HousingGallery() {
   
    const [flat, setFlat] = useState(null);
    useEffect(fetchAppartData);
    
    const { id } = useParams();

    
    function fetchAppartData() {
        fetch('../logements.json')
        .then((res) => {
            return res.json()
        })
           

        .then((flats) => {
            const flat = flats.find(flat => flat.id === id );
            console.log(flat);
            setFlat(flat)
            //setSelectedFlat a maintenant la valeur récupérer 
        })
        .catch(console.error);
    }
    if (flat == null) return <div></div>
        
  return (
    <div className='housing'>
        <Carrousel pictures={flat.pictures} />
        <UserHeader flat={flat} />
        <div className='housing__tagFlex'>
            <Collapse title={'Description'} content={flat.description}  />
            <Collapse title={'Equipements'} equipments={flat.equipments} content={flat.equipments.map((eq, i) => <li key={i}>{eq}</li>)} />
        </div>
    </div>
)
}
export default HousingGallery








        







