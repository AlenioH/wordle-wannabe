import React from 'react';

export const LineOne = ({ word, result, wordNumber }) => {
  const wordDeconstructed = word.split('');
  return (
    <React.Fragment>
      {wordDeconstructed.map((item, index) => {
        const find = result[wordNumber].find((letter) => {
          if (letter[item]) {
            return letter[item];
          } else {
            return false;
          }
        });
        return (
          <div key={index} className={`letterTile ${find ? find[item] : ''}`}>
            {item}
          </div>
        );
      })}
    </React.Fragment>
  );
};
