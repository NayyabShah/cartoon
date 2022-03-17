import React  from 'react'
import "./SearchBar.css";

function SearchBar({getInput}) {


  return (
    <div className="search">
      <div className="searchInputs">
         <input type="text" placeholder='Search' className="myInput" onChange={getInput}/>
      </div>

    </div>
  )
}

export default SearchBar
