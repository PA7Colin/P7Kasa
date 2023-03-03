import React from 'react'

function Description(props) {
  return (
<div className='housing__description'>
    <p className='housing__descriptionTag'>
        <span>Description</span>
        <i class="fas fa-chevron-up"></i>
    </p>
    <p className='housing__descriptionContent'>{props.description}</p>
</div>
  )
}

export default Description