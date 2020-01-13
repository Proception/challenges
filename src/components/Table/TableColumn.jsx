import React from 'react';

/**
 * @desc This is a reusable table Column component.
 * @param {String} value : This is a prop passed to the table column component with the values
 * @returns {JSX}
 */
const Column = ({value}) => {
  if (Array.isArray(value)) {
    return (
      <div className={'table-column'}>{value.join(', ')}</div>
    );
  }

  if (!Array.isArray(value)) {
    return (
      <div className={'table-column'}>{value}</div>
    );
  }
};

export default Column;
