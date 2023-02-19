import React from 'react'

import '../gallery/gallery.scss'
import housingBg from '../../assets/housingbg.png'

function Gallery() {
  return (
    <>
    <div className='housing'>
        <div>
            <img className='housing__img' src={housingBg} alt="Housing background" />
        </div>
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

        <div className='housing__description'>
            <p>Description</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, corrupti at velit modi harum inventore. Quo possimus facere esse? Illum nisi libero odio qui voluptatibus harum ipsum. Corporis quia, placeat unde voluptates enim sunt? Molestiae laboriosam quisquam blanditiis ab facere labore iste dolore quibusdam nemo? Id facilis explicabo quis voluptates?</p>
        </div>
        <div className='housing__description'>
            <p>Equipements</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, corrupti at velit modi harum inventore. Quo possimus facere esse? Illum nisi libero odio qui voluptatibus harum ipsum. Corporis quia, placeat unde voluptates enim sunt? Molestiae laboriosam quisquam blanditiis ab facere labore iste dolore quibusdam nemo? Id facilis explicabo quis voluptates?</p>
        </div>

    </div>
    </>
)
}

export default Gallery

        







