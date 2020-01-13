import React from 'react';

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
