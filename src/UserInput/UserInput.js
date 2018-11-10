import React from 'react';

const userInput = props => {
  const { name, changed, id } = props;
  return <input id={id} type="text" value={name} onChange={changed} />;
};

export default userInput;
