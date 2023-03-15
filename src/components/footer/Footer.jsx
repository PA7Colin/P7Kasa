import React from 'react'
import Logo from "../../assets/logoblack.png";

import "../footer/footer.scss";

function Footer() {
  return (
    <footer>
        <div className='footer__logo'>
            <img src={Logo} alt="logo" />
        </div>
        <div className='footer__text'>
        © 2023 Kasa. All rights reserved
        </div>
    </footer>
  )
}

export default Footer