import React from 'react';

const validationComponent = props => {
  const output =
    props.length < 5 ? 'Text is too short!!!' : 'Text is long enough!!!';
  return <p>{output}</p>;
};

export default validationComponent;
