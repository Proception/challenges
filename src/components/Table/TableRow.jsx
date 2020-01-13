import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Column from './TableColumn.jsx';

/**
 * @desc This is a reusable table row component.
 * @param {Array} rows : This is a prop passed to the table rows component for the row values
 * @returns {JSX}
 */
const TableRow = ({ rows }) => {
  if (rows.length === 0) {
    const noDataMessage = 'There is no consent data to display';
    return <div className={'no-data-message'}>{noDataMessage}</div>;
  } 
  
  return (
    <Fragment>
      {
        rows.map(row => {
          const rowValues = Object.values(row);
          return <div className={'table-row'}>
            {
              rowValues.map( rowvalue => <Column value={rowvalue} />)
            }
          </div>;
        })
      }
    </Fragment>
  );
};

TableRow.propTypes = {
  rows: PropTypes.array
};

export default TableRow;
