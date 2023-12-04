import React from 'react'
import './topnavbar.css'
import logo from './nav-img/logo.png'
import Search from '../Baglanti.jsx/Search'
import Person from '../Baglanti.jsx/Person'
import Sebet from '../Baglanti.jsx/Sebet'
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const TopNavbar = ({ showMobil, showSearch }) => {
  return (
      <div className='top'>
          <div className='top-left'>
              <span className="cursor" >AZ</span>
              <div>
                  <Search showSearch={showSearch}  />
              </div>

          </div>
          <div className='top-center'>
              <img src={logo} alt="" /></div>
          <div className='top-right'>
              <div>
                  <Link to='login'><Person /></Link>   
              </div>
              <div>
                  <Sebet />
              </div>

          </div>
          <div className="mobile-bars">
              <Search showSearch={showSearch} />
              <FaBars className='bars-icon cursor' onClick={showMobil} />
          </div>
      </div>
  )
}

export default TopNavbar