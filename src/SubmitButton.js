import React from 'react';
import './SubmitButton.css';

function SubmitButton(props) {
  return (
    <button className="submit-button" onClick={props.onClick}>
      Submit
    </button>
  );
}

export default SubmitButton;
