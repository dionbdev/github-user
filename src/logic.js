import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Show from './show'

export default function Logic() {
  
  

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("chris");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const searchInputRef = useRef();
  
  const githubApi = `https://api.github.com/search/users?q=${query}`;

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        githubApi
      );
      setResults(response.data.items);
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  const handleSearch = event => {
    event.preventDefault();
    getResults();
  };

  const handleClearSearch = () => {
    setQuery("");
    searchInputRef.current.focus();
  };

  const handleSearch2 = event => {
    setQuery(event.target.value);
  }





  return (
          <Show 
            results={results}
            query={query}
            loading={loading}
            error={error}
            searchInputRef={searchInputRef}
            handleSearch={handleSearch}
            handleSearch2={handleSearch2}
            handleClearSearch={handleClearSearch}

          />
    )
}
