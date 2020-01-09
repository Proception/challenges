import React, { Component } from 'react';

const Input = (props) => {
  return (
    <input 
      class={props.className}
      type={props.type}
      min={props.min}
      name= {props.name}
      value={props.value} 
      onClick={props.action}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
