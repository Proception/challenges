import React, { Component } from 'react';

const DisplayCard = (props) => {
  return (
    <div onClick = {props.onClick} class= {props.className}>
      {props.children}
    </div>
  );
};

export default DisplayCard;
