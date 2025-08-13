import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/images/ecoLogo.png'

const Header = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="" />
      </div>
    </div>
  )
}

export default Header
