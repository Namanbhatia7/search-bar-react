import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResult';
import './App.css'
import useKeyboardNavigation from './hooks/useKeyboardNavigation';

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const onEnter = (selectedItem) => {
    console.log('Selected item:', selectedItem);
    setShowResults(false);
  };

  const { handleKeyDown } = useKeyboardNavigation({
    data,
    selectedIndex,
    setSelectedIndex,
    searchQuery,
    setSearchQuery,
    onEnter,
  });

  console.log(searchQuery, "SA")

  useEffect(() => {
    axios.get('https://fe-take-home-assignment.s3.us-east-2.amazonaws.com/Data.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleShowResults = () => {
    setShowResults(true);
  }

  const handleSearchBlur = () => {
    if (searchQuery.length === 0) {
      setShowResults(false);
    }
  };

  console.log("seecce", selectedIndex)

  return (
    <div className="app-container">
      <div className="search-container">
        <SearchBar value={searchQuery} onChange={setSearchQuery} handleShowResults={handleShowResults} handleSearchBlur={handleSearchBlur} onKeyDown={handleKeyDown} />
        {showResults && <SearchResults data={data} searchQuery={searchQuery} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />}
      </div>
    </div>
  );
}

export default App;