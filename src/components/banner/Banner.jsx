import React from 'react'

import imgBanner from "../../assets/banner.png";
import "../banner/banner.css";

function Banner() {
  return (
    <div className='banner'>
        <img src={imgBanner} alt="banner" />
        <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner