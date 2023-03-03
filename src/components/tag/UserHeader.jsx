import React from 'react'

function UserHeader(props) {
    const { flat } = props;
    // Pb du name séparer en span
    const name = flat.host.name;
    const [firstName, lastName] = name.split(' ');
  return (
    <section className='housing__header'>
        <div className='housing__title'>
            <h1>{flat.title}</h1>
            <h2>{flat.location}</h2>
            <div className='housing__tag'>
                {flat.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
        </div>

        <div className='housing__owner'>
            <div className='housing__ownerdetails'>
                <h3> <span>{firstName}</span> <span>{lastName}</span></h3>
                <div className='housing__badge'>
                    <img src={flat.host.picture} alt="User img" />
                </div>
            </div>

            <div className='housing__stars'>
                {[1, 2, 3, 4, 5].map((num) => (
                    <span key={num} className={props.flat.rating > num ? 'on': ''}>★</span>
                 ))}
            </div>
        </div>
        </section>
  )
}

export default UserHeader