import React from 'react';
import PropTypes from 'prop-types';

/**
 * @desc This component is responsible for creating a display card
 * @param {Function} onClick : This is a function that is executed when the display card clicked
 * @param {String} className : This is used to style the display card
 * @returns {JSX}
 */
const DisplayCard = (props) => {
  return (
    <div onClick = {props.onClick} className={props.className}>
      {props.children}
    </div>
  );
};

DisplayCard.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.array
};

export default DisplayCard;
