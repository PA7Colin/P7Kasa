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
      <section className='description_container'>
        <div className='description__about'>
          <Description />
          <Description />
          <Description />
          <Description />
        </div>
      </section>
      <Footer />      
    </main>
)
}



export default About
