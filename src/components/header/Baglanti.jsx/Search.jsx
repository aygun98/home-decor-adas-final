import React from 'react'
import searchIcon from '../navbar/nav-img/search.png'

const Search = ({ showSearch }) => {

  return (
    <div className='search-icon cursor' onClick={showSearch}>

      <img src={searchIcon} alt="" />
    </div>
  )
}

export default Search