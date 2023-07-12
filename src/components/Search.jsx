import React, { useRef, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../redux/slices/cartSlice';
import debounce from 'lodash.debounce';

const Search = () => {
    const dispatch = useDispatch();

    const inputRef = useRef(null);
    const [value, setValue] = useState('');

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 250),
        [],
    );

    const onChangeInput = (e) => {
        setValue(e.target.value);
        updateSearchValue(e.target.value);
    };

    return (
        <div className="search">
            <input
                placeholder="Я хочу купить..."
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
            />
            <img src="../assets/search.png" alt="search" />
        </div>
    );
};

export default Search;
