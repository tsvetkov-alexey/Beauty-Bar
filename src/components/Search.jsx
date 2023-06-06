import React, { useContext } from 'react';
import { SearchRequest } from '../App';

const Search = () => {
    const { searchValue, setSearchValue } = useContext(SearchRequest);

    return (
        <div className="search">
            <input
                placeholder="Я хочу купить..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <img src="../assets/search.png" alt="search" />
        </div>
    );
};

export default Search;
