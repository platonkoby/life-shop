import React from 'react'
import {ImSearch} from 'react-icons/im';

function Search() {
    return (
        <div className="search-bar">
            <ImSearch size="24" color="rgb(255,193,0)"/>
            <input type="text" name="search-input" placeholder="search by tags or title" />
        </div>
    )
}

export default Search
