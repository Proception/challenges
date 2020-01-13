import React from 'react';
import PropTypes from 'prop-types';


/**
 * @desc This component is responsible for creating input fields of different types
 * @param {function} action : This is a function that is executed when clicked
 * @param {function} handleChange : This is a function that is executed when input value changes
 * @param {String} className : This is used to style the  display card
 * @param {String} type : This is used to determine the input type
 * @param {String} min : This is used for input type for number
 * @param {String} value : This is determines the default value for the input
 * @param {String} name : This is the name of the input
 * @returns {JSX}
 */
const Input = (props) => {
  return (
    <input 
      className={props.className}
      type={props.type}
      min={props.min}
      name={props.name}
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
  handleChange: PropTypes.func,
  action: PropTypes.func,
  placeholder: PropTypes.string
};

export default Input;
