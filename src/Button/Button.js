import React from 'react';

const button = props => {
  const { click, value } = props;
  return (
    <div>
      <button type="reset" onClick={click}>
        {value}
      </button>
    </div>
  );
};

export default button;
