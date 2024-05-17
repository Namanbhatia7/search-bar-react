import React from 'react';
import TextField from '@mui/material/TextField';
import './SearchComponents.css'

const SearchBar = ({ value, onChange, handleShowResults, handleSearchBlur, onKeyDown }) => {
  const handleSearchChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className='search-bar'>
    <TextField
      label="Search"
      variant="outlined"
      value={value}
      onChange={handleSearchChange}
      onFocus={handleShowResults}
      onInput={handleShowResults}
      onBlur={handleSearchBlur}
      onKeyDown={onKeyDown}
      placeholder='Search Users by ID, address, name and items'
    />
    </div>
  );
};

export default SearchBar;