import React from 'react';
import SearchResultCard from './SearchResultCard';
import './SearchComponents.css'
import { filterData } from '../helpers/filterData';
import { Card, CardContent, Typography } from '@mui/material';

const SearchResults = ({ data, searchQuery, selectedIndex, setSelectedIndex }) => {
  const filteredData = filterData(data, searchQuery);

  if (filteredData.length === 0) {
    return (
      <Card className="results-container">
        <CardContent>
          <Typography>
              No Results Found.
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="results-container">
      {filteredData.map((item, index) => (
        <SearchResultCard key={item.id} item={item} searchQuery={searchQuery} isSelected={index === selectedIndex} setSelectedIndex={() => setSelectedIndex(index)} />
      ))}
    </div>
  );
};

export default SearchResults;