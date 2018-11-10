import React from 'react';

const userOutput = props => {
  const { children } = props;
  return (
    <div>
      <p>{children}</p>
    </div>
  );
};

export default userOutput;
