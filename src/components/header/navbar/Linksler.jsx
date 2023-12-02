import React from 'react'
import { NavLink } from 'react-router-dom'
const Linksler = () => {
    return (
        <div className='links'>
            <NavLink className={({ isActive }) =>isActive ? "navActive" : ""} to='/' >
                Home
            </NavLink>
            <NavLink to= ''>
                About
            </NavLink>
            <NavLink to=''>
                Products
            </NavLink>
            <NavLink to=''>
                Collections
            </NavLink>
            <NavLink to=''>
                Sale
            </NavLink>
            <NavLink to=''>
                Contact
            </NavLink>
        </div>
    )
}

export default Linksler