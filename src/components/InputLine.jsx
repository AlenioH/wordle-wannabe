import React, { useRef } from 'react';

export const InputLine = ({ onSubmit, word }) => {
  const isEmptyString = (element) => element.length === 0;
  const indexOfEmpty = word.findIndex(isEmptyString);
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
