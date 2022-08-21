import React from 'react';

export const Line = ({ word, result, guessNumber }) => {
  const wordDeconstructed = word.split('');
  return (
    <React.Fragment>
      {wordDeconstructed.map((item, index) => {
        const find = result[guessNumber]
        ?.find((letter) => {
            if (letter[index]) {
                return letter[index];
              } else {
                  return false;
              }
          });
        return (
          <div key={index} className={`letterTile ${find?.[index] || ''}`}>
            {item}
          </div>
        );
      })}
    </React.Fragment>
  );
};
