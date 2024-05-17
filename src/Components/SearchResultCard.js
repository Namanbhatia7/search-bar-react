import React, { useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Highlight from './Highlight';
import './SearchComponents.css'

const SearchResultCard = ({ item, searchQuery, isSelected, setSelectedIndex }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        if (isSelected && cardRef.current) {
        cardRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
        });
        }
    }, [isSelected]);

  return (
    <Card className={`result-card ${isSelected ? 'selected-result-card' : ''}`} ref={cardRef} onMouseEnter={setSelectedIndex}>
      <CardContent>
      <Typography>
          <Highlight text={item.id} query={searchQuery} />
        </Typography>
        <Typography>
          <Highlight text={item.name} query={searchQuery} />
        </Typography>
        {item.matchInItems && (
          <Typography className="items-found">
            <Highlight text={searchQuery} query={searchQuery} /> found in items
          </Typography>
        )}
        <Typography>
          <Highlight text={item.address} query={searchQuery} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SearchResultCard;