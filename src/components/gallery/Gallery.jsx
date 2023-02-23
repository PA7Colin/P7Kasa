import React from 'react'

import '../gallery/gallery.scss'

import Description from '../tag/Description'
import Equipements from '../tag/Equipements'
import AppartBanner from '../banner/AppartBanner'

function Gallery() {
  return (
    <>
    <div className='housing'>
        <AppartBanner />
        <section className='housing__header'>
        <div className='housing__title'>
            <h1>Cozy loft on the Canal saint Martin</h1>
            <h2>Paris, ile de France</h2>
            <div className='housing__tag'>
                <span>Cozy</span>
                <span>Canal</span>
                <span>Paris 10</span>
            </div>
        </div>

        <div className='housing__owner'>
            <div className='housing__ownerdetails'>
                <h3> <span>Alexandre</span> <span>Dumas</span></h3>
                <div className='housing__badge'></div>
            </div>

            <div className='housing__stars'>
                <span className='on'>★</span>
                <span className='on'>★</span>
                <span className='on'>★</span>
                <span className='off'>★</span>
                <span className='off'>★</span>
            </div>
        </div>
        </section>
        <div className='housing__tagFlex'>
            <Description />
            <Equipements />
        </div>
    </div>
    </>
)
}
export default Gallery








        







