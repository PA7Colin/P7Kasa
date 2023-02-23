import React from 'react'
import { Link } from "react-router-dom";

import '../scss/404.scss'


import Header from '../components/header/Header'

function Error() {
  return (
    <>
    <Header />
    <main className='error'>
      <h1>404</h1>
      <h2>Oops ! La page que vous avez demandez n'existe pas.</h2>
      <Link id="home" to='/'>Retournez sur la page d'accueil</Link>
    </main>
    
    </>
  )
}

export default Error