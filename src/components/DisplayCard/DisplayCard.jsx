import React from 'react';
import PropTypes from 'prop-types';

const DisplayCard = (props) => {
  return (
    <div onClick = {props.onClick} className={props.className}>
      {props.children}
    </div>
  );
};

DisplayCard.propTypes = {
  min: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.array
};

export default DisplayCard;
