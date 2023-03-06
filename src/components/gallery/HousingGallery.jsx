import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import '../gallery/gallery.scss'

import Collapse from '../collapse/Collapse'
import Carrousel from '../carrousel/Carrousel'
import UserHeader from '../tag/UserHeader'

function HousingGallery() {
    const location = useLocation();
    const [flat, setFlat] = useState(null);
    useEffect(fetchAppartData);
    
    function fetchAppartData() {
        fetch('logements.json')
        .then((res) => res.json())
        .then((flats) => {
            const flat = flats.find(flat => flat.id === location.state.apartId);
            setFlat(flat)
            //setSelectedFlat a maintenant la valeur récupérer 
        })
        .catch(console.error);
    }
    if (flat == null) return <div></div>
        
  return (
    <div className='housing'>
        <Carrousel imageUrl={flat.cover} />
        <UserHeader flat={flat} />
        <div className='housing__tagFlex'>
            <Collapse title={'Description'} content={flat.description}  />
            <Collapse title={'Equipements'} equipments={flat.equipments} content={flat.equipments.map(eq => <li>{eq}</li>)} />
        </div>
    </div>
)
}
export default HousingGallery








        







