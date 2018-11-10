import React from 'react';

const validationComponent = props => {
  const output =
    props.length < 6 ? 'Text is too short!!!' : 'Text is long enough!!!';
  return (
    <div>
      <p>{output}</p>
    </div>
  );
};

export default validationComponent;
