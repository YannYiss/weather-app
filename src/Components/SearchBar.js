import React from 'react';
import './SearchBar.scss';

export default function SearchBar({input, inputHandler, submitHandler}) {
    return (
        <div className= 'search'>
            <h1 className='search__title'>Wolrd Weather</h1>
            <input type="text" placeholder="Search your city" value={input} onChange= {inputHandler} className= 'search__searchBar'></input>
            <button onClick={submitHandler} className= 'search__searchButton'>Search</button>
        </div>
    )
};
