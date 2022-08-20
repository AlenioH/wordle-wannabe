import React, { useRef } from 'react';

export const InputLine = ({ onSubmit, guess }) => {
  const isEmptyString = (element) => element.length === 0;
  // finding which line this should be inserted into
  const indexOfEmpty = guess.findIndex(isEmptyString);
  const inputRef = useRef();
  return (
    <React.Fragment>
      <form
        className="form"
        onSubmit={(event) => onSubmit(event, inputRef, indexOfEmpty)}
      >
        <input
          ref={inputRef}
          className="inputLine"
          type="text"
          placeholder="Type the word here... max 5 letters"
          maxLength={5}
          minLength={5}
        ></input>
      </form>
    </React.Fragment>
  );
};
