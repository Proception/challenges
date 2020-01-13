import React from 'react';
import PropTypes from 'prop-types';
import Column from './TableColumn.jsx';

const TableHeader = ({ columns }) => {
  return (
    <div className={'table-header'}>
      {
        columns.map((columnValue) => <Column value={columnValue} />)
      }
    </div>
  );
};


TableHeader.propTypes = {
  columns: PropTypes.array
};

export default TableHeader;
