import React, { useState } from 'react'

function Carrousel(props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);

const getClassName = (i) => {
    if (i === currentPicture) return "show";

    return "";
  };

const displayChevron = () => {
    return pictures && pictures.length > 1 ;
  }

const moveToNext = () => {
  setCurrentPicture((currentPicture + 1 ) % pictures.length);
}


const moveToPrevious = () => {
  const newCurrentPicture = currentPicture - 1 ;
  if (newCurrentPicture < 0) {
    setCurrentPicture(pictures.length - 1);
    return
  }

  setCurrentPicture((currentPicture - 1 ));
}

return (
<div className='housing__carrousel'>
  <div className='housing__container'>
    {pictures.map((pic, i) => (
      <img key={pic} src={pic} alt='Carrousel' className={getClassName(i)}></img>
      ))}
  </div>
      {displayChevron() && <> <button className='btn btn-next' onClick={moveToNext}> <i className="fas fa-chevron-right"></i> </button>
      <span className='slide-counter'> {currentPicture + 1} / {pictures.length} </span>
      <button className='btn btn-previous' onClick={moveToPrevious}> <i className="fas fa-chevron-left"></i> </button> </> }
</div>
)}

export default Carrousel 