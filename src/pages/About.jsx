import React from 'react'

import Header from '../components/header/Header'
import AboutBanner from '../components/banner/AboutBanner'
import Collapse from '../components/collapse/Collapse'
import Footer from '../components/footer/Footer'

import {about} from '../service/AboutData'


function About() {
  return (
    <main>
      <Header />
      <AboutBanner />
      <section className='description_container'>
        <div className='description__about'>
          <Collapse title='Fiabilité' content={about.fiability}/>
          <Collapse title='Respect' content={about.respect} />
          <Collapse title='Service' content={about.service} />
          <Collapse title='Responsabilité' content={about.security} />
        </div>
      </section>
      <Footer />      
    </main>
)
}



export default About
