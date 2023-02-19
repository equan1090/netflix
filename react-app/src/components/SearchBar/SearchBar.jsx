import React, { useState, useEffect, useRef } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const data = [
      { id: 1, title: 'The Irishman' },
      { id: 2, title: 'Marriage Story' },
      { id: 3, title: 'The Two Popes' },
      { id: 4, title: 'The Witcher' },
      { id: 5, title: 'Stranger Things' }
    ];

    const searchTimeout = useRef(null);

    const handleSearch = (event) => {
      clearTimeout(searchTimeout.current);
      setSearchTerm(event.target.value);
      searchTimeout.current = setTimeout(() => {
        const filteredResults = data.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filteredResults);
      }, 1000);
    };

    return (
      <>
        <input type="text" onChange={handleSearch} value={searchTerm} />
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      </>

    );
  };

export default SearchBar;
