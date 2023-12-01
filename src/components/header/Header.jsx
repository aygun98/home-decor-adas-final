import React from 'react'
import './header.css'
import Navbar from './navbar/Navbar'
import logo from './navbar/nav-img/logo.png'
import Search from './Baglanti.jsx/Search'
import Person from './Baglanti.jsx/Person'
import Sebet from './Baglanti.jsx/Sebet'

const Header = () => {
  return (
    <header className='nav-container'>
      <div className='top'>
        <div className='top-left'>
          <span>AZ</span>
          <div>
            <Search />
          </div>

        </div>
        <div className='top-center'>
          <img src={logo} alt="" /></div>
        <div className='top-right'>
          <div>
            <Person />
          </div>
          <div>
            <Sebet />
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  )
}

export default Header