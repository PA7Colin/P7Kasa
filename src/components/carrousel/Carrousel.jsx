import React from 'react'




function Carrousel(props) {
  return (
<div>
    <img className='housing__img' src={props.imageUrl} alt="Housing background" />
</div>
  )
}

export default Carrousel