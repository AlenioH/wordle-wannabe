import React from 'react';
import { EmptyLine } from './EmptyLine';
import { Line } from './Line';

export const GameField = ({ guess, result }) => {
  return (
    <div className="field">
      <div className="fieldLine">
        {guess.map((item, index) => {
          return item.length ? (
            <div key={item} style={{ display: 'flex', marginTop: '1rem' }}>
              <Line word={item} result={result} wordNumber={index} />{' '}
            </div>
          ) : (
            <EmptyLine />
          );
        })}
      </div>
    </div>
  );
};
