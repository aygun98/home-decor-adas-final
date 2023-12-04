import React from 'react'
import { NavLink } from 'react-router-dom'
const Linksler = () => {
    return (
        <div className='links'>
            <NavLink className={({ isActive }) =>isActive ? "navActive" : ""} to='/' >
                Home
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "navActive" : ""} to='/about'>
                About
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "navActive" : ""} to='/products'>
                Products
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "navActive" : ""} to='/collections'>
                Collections
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "navActive" : ""} to='/sale'>
                Sale
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "navActive" : ""} to='/contact'>
                Contact
            </NavLink>
        </div>
    )
}

export default Linksler