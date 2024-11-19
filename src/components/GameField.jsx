import React from 'react';
import { EmptyLine } from './EmptyLine';
import { Line } from './Line';

export const GameField = ({ guess, result }) => {
  return (
    <div className="field">
      <div className="fieldLine">
        {guess.map((item, index) => {
          return item.length ? (
            <div key={item} style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <Line word={item} result={result} attempt={index} />{' '}
            </div>
          ) : (
            <EmptyLine />
          );
        })}
      </div>
    </div>
  );
};
