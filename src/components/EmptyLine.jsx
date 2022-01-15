import React from 'react';

export const EmptyLine = () => {
  const emptyOne = [' ', ' ', ' ', ' ', ' '];

  return (
    <div style={{ display: 'flex', marginTop: '1rem' }}>
      {emptyOne.map((item, index) => {
        return (
          <div key={index} className="letterTile">
            {item}
          </div>
        );
      })}
    </div>
  );
};
