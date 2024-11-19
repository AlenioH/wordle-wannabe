import React from 'react';

export const EmptyLine = () => {
  const emptyOne = Array(5).fill('');

  return (
    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
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
