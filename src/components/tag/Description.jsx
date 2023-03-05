import React, { useState } from 'react'

function Description(props) {
  //Collapse
  const [isContentVisible, setIsContentVisible] = useState(false);
  const showContent = () => {
    setIsContentVisible(!isContentVisible)
  }

  return (
<div className='housing__description'>
    <p className='housing__descriptionTag'>
        <span>Description</span>
        <i class="fas fa-chevron-up" onClick={showContent}></i>
    </p>

    {isContentVisible && <p className='housing__descriptionContent'>{props.description}</p>}
</div>
)}
export default Description
    
