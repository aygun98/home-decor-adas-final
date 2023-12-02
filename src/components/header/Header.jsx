import React, { useState } from 'react'
import './header.css'
import MobileNavbar from './MobileNavbar/MobileNavbar'
import TopNavbar from './navbar/TopNavbar'
import Navbar from './navbar/Navbar'



const Header = () => {

  const [mobileMenu, setMobileMenu] = useState(false)
  const showMobil = () => { setMobileMenu(true) }
  const closeMobil = () => { setMobileMenu(false) }
  return (
    <header className='nav-container'>
      <div className={`bg-mobile-navbar-container ${mobileMenu ? 'bg-menuaktiv' : ''}`}></div>
      <div className={`mobile-navbar-container ${mobileMenu ? 'menuaktiv' : ''}`}>
        <MobileNavbar closeMobil={closeMobil} />
      </div>
      <div>
        <TopNavbar showMobil={showMobil} />
      </div>
      <Navbar />
    </header>
  )
}

export default Header