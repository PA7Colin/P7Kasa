import React, { useState } from 'react'

function Collapse(props) {
  //Collapse
  const [isContentVisible, setIsContentVisible] = useState(false);
  const showContent = () => {
    setIsContentVisible(!isContentVisible)
  }

  const chevronClass = (isContentVisible ? "fa-sharp fa-solid fa-chevron-up" : "fa-sharp fa-solid fa-chevron-down") + " fas";

  return (
<div className='housing__description'>
    <p className='housing__descriptionTag' onClick={showContent}>
        <span>{props.title}</span>
        <i className={chevronClass} ></i>
    </p>

    {isContentVisible && <p className='housing__descriptionContent'>{props.content}</p>}
</div>
)}
export default Collapse
    
