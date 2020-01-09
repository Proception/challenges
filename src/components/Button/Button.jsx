import React, { Component } from 'react';

const Button = (props) => {
  return (
    <button className={props.classButton} disabled={props.disabled}
      id={props.id}
      onClick={ props.disabled ? '' : props.action}>
      <div className= {props.classTitle}>
        {props.title} 
      </div>
    </button>
  );
};

export default Button;
