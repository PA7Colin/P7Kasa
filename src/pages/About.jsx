import React from 'react'

import Header from '../components/header/Header'
import AboutBanner from '../components/banner/AboutBanner'
import Description from '../components/tag/Description'
import Footer from '../components/footer/Footer'


function About() {
  return (
    <main>
      <Header />
      <AboutBanner />
      <div className='description_container'>
        <Description />
        <Description />
        <Description />
        <Description />
      </div>
        <Footer />      
    </main>
  )
}

export default About
