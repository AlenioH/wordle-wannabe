import React, { useEffect } from 'react';
import { EmptyLine } from './EmptyLine';
import { LineOne } from './LineOne';

export const GameField = ({ word, result }) => {
  return (
    <div className="field">
      <div className="fieldLine">
        {word.map((item, index) => {
          return item.length ? (
            <div key={item} style={{ display: 'flex', marginTop: '1rem' }}>
              <LineOne word={item} result={result} wordNumber={index} />{' '}
            </div>
          ) : (
            <EmptyLine />
          );
        })}
      </div>
    </div>
  );
};
