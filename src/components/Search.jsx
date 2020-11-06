import React from 'react';
import '../assets/styles/components/Search.css';

const Search = ({searchChange}) => (

    <div className='py-2 text-center'>
            <input 
                className='py-3 text-center border border-primary rounded-pill'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
    </div>
);

export default Search;