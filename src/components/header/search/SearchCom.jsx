import React from 'react'
import './searchCom.css'
import { RxCross1 } from "react-icons/rx";
import Search from '../Baglanti.jsx/Search';

const SearchCom = ({ closeSearch }) => {
    return (
        // <div className='searchCom-container'>
            <div className='searchCom'>
                <form action="">
                    <Search />
                    <div className='input-div'>
                        <input placeholder='SEARCH OUR STORE' type="text" />
                    </div>
                    <div className='cross cursor'>

                        <RxCross1 onClick={closeSearch}/>
                    </div>
                </form>
            </div>
        // </div>
    )
}

export default SearchCom