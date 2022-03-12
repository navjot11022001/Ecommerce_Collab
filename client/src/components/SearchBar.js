import React from 'react'

const SearchBar = () => {
  return (
    <div className='container mt-1 d-flex'>
         <img
            className="gifLogo"
            src="https://i.pinimg.com/originals/7c/89/90/7c89904c65970d2581ce4b5a392f7712.gif"
          ></img>

<div className="searchForm">
          <input
            type="search"
            className="searchInput"
            placeholder="Search Items   &#xf002;"
            onChange={(e) => {
            //   setSearchProduct(e.target.value);
            }}
          ></input>
          {/* <button className='searchButton'>Search</button> */}
        </div>
    </div>
  )
}

export default SearchBar