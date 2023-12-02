import React from 'react'
import './topnavbar.css'
import logo from './nav-img/logo.png'
import Search from '../Baglanti.jsx/Search'
import Person from '../Baglanti.jsx/Person'
import Sebet from '../Baglanti.jsx/Sebet'
import { FaBars } from "react-icons/fa6";

const TopNavbar = ({ showMobil }) => {
  return (
      <div className='top'>
          <div className='top-left'>
              <span className="cursor" >AZ</span>
              <div>
                  <Search  />
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
          <div className="mobile-bars">
              <Search  />
              <FaBars className='bars-icon cursor' onClick={showMobil} />
          </div>
      </div>
  )
}

export default TopNavbar