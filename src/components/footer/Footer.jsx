import React from 'react'
import Logo from "../../assets/logoblack.png";

import "../footer/footer.scss";

function Footer() {
  return (
    <section className='footer'>
        <div className='footer__logo'>
            <img src={Logo} alt="logo" />
        </div>
        <div className='footer__text'>
        © 2023 Kasa. All rights reserved
        </div>
    </section>
  )
}

export default Footer