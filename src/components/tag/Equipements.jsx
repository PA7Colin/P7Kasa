import React from 'react'

function Equipements(props) {
  return (
<div className='housing__description'>
    <p className='housing__descriptionTag'>
        <span>Equipements</span>
        <i class="fas fa-chevron-up"></i>
    </p>
    <p className='housing__descriptionContent'>{props.content}</p>
</div>
  )
}

export default Equipements