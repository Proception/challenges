import React from 'react';
import PropTypes from 'prop-types';


/**
 * @desc Reusable Button compnent that takes the following properties
 * @param {String} id
 * @param {String} classButton : This is the class for the button element
 * @param {Boolean} disabled: This determines if the button is disabled or not
 * @param {Function} action: This is a function that executes when the button is clicked
 * @param {string} classTitle: This determines what the style button title would be
 * @param {string} title: This determines the value of the button
 * @returns {JSX}
 */
const Button = (props) => {
  return (
    <button className={props.classButton} disabled={props.disabled} id={props.id} onClick={props.disabled ? '' : props.action}>
      <div className={props.classTitle}>
        {props.title} 
      </div>
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  classButton: PropTypes.string,
  disabled: PropTypes.bool,
  action: PropTypes.func,
  classTitle: PropTypes.string,
  title: PropTypes.string
};

export default Button;
