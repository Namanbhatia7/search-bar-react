import React from 'react';

const Highlight = ({ text, query }) => {
  if (!query) {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} style={{ color: 'blue' }}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default Highlight;