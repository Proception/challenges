import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <input 
      className={props.className}
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

Input.propTypes = {
  min: PropTypes.number,
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string
};

export default Input;
