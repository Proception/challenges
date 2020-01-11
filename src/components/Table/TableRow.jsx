import React, {Fragment} from 'react';
import Column from './TableColumn.jsx';

const TableRow = ({ key, rows }) => {
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


export default TableRow;
