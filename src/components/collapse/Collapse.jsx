import React, { useState } from 'react'

function Collapse(props) {
  //Collapse
  const [isContentVisible, setIsContentVisible] = useState(false);
  const showContent = () => {
    setIsContentVisible(!isContentVisible)
  }

  return (
<div className='housing__description'>
    <p className='housing__descriptionTag'>
        <span>{props.title}</span>
        <i className="fas fa-chevron-up" onClick={showContent}></i>
    </p>

    {isContentVisible && <p className='housing__descriptionContent'>{props.content}</p>}
</div>
)}
export default Collapse
    
