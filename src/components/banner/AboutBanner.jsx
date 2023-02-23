import React from 'react'

import aboutBanner from "../../assets/aboutbanner.png";
import "../banner/aboutbanner.scss";

function AboutBanner() {
  return (
    <div className='banner'>
        <img src={aboutBanner} alt="banner" />
    </div>
  )
}

export default AboutBanner