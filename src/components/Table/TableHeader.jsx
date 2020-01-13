import React from 'react';
import PropTypes from 'prop-types';
import Column from './TableColumn.jsx';

/**
 * @desc This is a reusable table header component. It receives an array of values for the header
 * @param {Array} columns : This is a prop passed to the table header component with the table headers
 * @returns {JSX}
 */
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
