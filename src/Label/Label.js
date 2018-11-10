import React from 'react';

const label = props => {
  return <label for={props.target}>{props.children}</label>;
};

export default label;
