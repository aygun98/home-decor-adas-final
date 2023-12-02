import React from 'react'
import './mobileNavbar.css'
import Linksler from '../navbar/Linksler'
import Person from '../Baglanti.jsx/Person'
import Sebet from '../Baglanti.jsx/Sebet'
import { RxCross1 } from "react-icons/rx";
// import Search from '../Baglanti.jsx/Search'



const MobileNavbar = ({ closeMobil }) => {
    return (
        <div >
            <nav>
                <div className='icons'>
                    <div className='person-sebet'>

                        <Sebet />
                        <Person />
                    </div>
                    <div className='cross cursor'>
                        <RxCross1 onClick={closeMobil}   />
                    </div>
                </div>
                <Linksler />
                <div className='diller'>
                    <span>AZ</span>
                    <span>EN</span>
                    <span>RU</span>
                </div>
            </nav>
        </div>
    )
}

export default MobileNavbar