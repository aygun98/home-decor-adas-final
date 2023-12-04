import React, { useState } from 'react'
import './header.css'
import MobileNavbar from './MobileNavbar/MobileNavbar'
import TopNavbar from './navbar/TopNavbar'
import Navbar from './navbar/Navbar'
import SearchCom from './search/SearchCom'





const Header = () => {
    const [searchOpen, setSearchOpen] =useState(false)
    const showSearch =()=>{setSearchOpen(true)}
    const closeSearch =()=>{setSearchOpen(false)}
  const [mobileMenu, setMobileMenu] = useState(false)
  const showMobil = () => { setMobileMenu(true) }
  const closeMobil = () => { setMobileMenu(false) }
  return (
    <header className='nav-container'>
      <div className= {`bg-searchCom-container ${searchOpen? 'bg-searchaktiv' :''}`}></div>
      <div className={`searchCom-container  ${searchOpen ? 'searchaktiv' : ''}`}>

    <SearchCom  closeSearch ={closeSearch} />
      </div>
      <div className={`bg-mobile-navbar-container ${mobileMenu ? 'bg-menuaktiv' : ''}`}></div>
      <div className={`mobile-navbar-container ${mobileMenu ? 'menuaktiv' : ''}`}>
        <MobileNavbar closeMobil={closeMobil} />
      </div>
      <div>
        <TopNavbar showMobil={showMobil} showSearch={showSearch} />
      </div>
      <Navbar showSearch={showSearch} />
      
    </header>
  )
}

export default Header