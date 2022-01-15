import React, { useEffect } from 'react';
import { EmptyLine } from './EmptyLine';
import { LineOne } from './LineOne';

export const GameField = ({ word }) => {
  return (
    <div className="field">
      <div className="fieldLine">
        {word.map((item) => {
          return item.length ? (
            <div key={item} style={{ display: 'flex', marginTop: '1rem' }}>
              <LineOne word={item} />{' '}
            </div>
          ) : (
            <EmptyLine />
          );
        })}
      </div>
    </div>
  );
};
