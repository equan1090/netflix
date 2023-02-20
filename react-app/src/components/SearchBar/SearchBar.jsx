import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { searchAnimeThunk } from '../../store/search';
import './SearchBar.css';
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

  const searchTimeout = useRef(null);
  

    useEffect(() => {
      if (searchTerm){
        history.push(`/search/q=${searchTerm}`);

      }

      const debouncedSearch = () => {
        dispatch(searchAnimeThunk(searchTerm));
      }

      clearTimeout(searchTimeout.current);
      searchTimeout.current = setTimeout(debouncedSearch, 1000);

    }, [searchTerm, history, dispatch])


    function handleSearch(event) {
      setSearchTerm(event.target.value);
    }


    return (
      <>
      <form onSubmit={handleSearch}>
        <input type="text"
        onChange={handleSearch}
        value={searchTerm}
        className='search-bar'
        placeholder='Search'
        // onKeyDown={handleKeyDown}
        />
      </form>
      </>

    );
  };

export default SearchBar;
