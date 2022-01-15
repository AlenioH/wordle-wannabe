import React from 'react';

export const LineOne = ({ word }) => {
  const wordDeconstructed = word.split('');

  return (
    <React.Fragment>
      {wordDeconstructed.map((item, index) => {
        return (
          <div key={index} className="letterTile">
            {item}
          </div>
        );
      })}
    </React.Fragment>
  );
};
