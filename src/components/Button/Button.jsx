import React from 'react';
import PropTypes from 'prop-types';

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
