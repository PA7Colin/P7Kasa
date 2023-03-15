import React from 'react'

import aboutBanner from "../../assets/aboutbanner.jpg";
import "../banner/aboutbanner.scss";

function AboutBanner() {
  return (
    <div className='banner'>
        <img src={aboutBanner} alt="banner" className='aboutimg' />
    </div>
  )
}

export default AboutBanner