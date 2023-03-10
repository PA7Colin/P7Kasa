import React from 'react'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import HousingGallery from '../components/gallery/HousingGallery'
import { useParams } from 'react-router-dom'



function Housing() {
  
  return (
    <>
    <Header />
    <HousingGallery />
    <Footer />
    </>
  )
}

export default Housing