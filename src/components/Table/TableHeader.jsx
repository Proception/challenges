import React from 'react';
import Column from './TableColumn.jsx';

const TableHeader = ({ key, columns }) => {
  return (
    <div key={key} className={'table-header'}>
      {
        columns.map((columnValue) => <Column value={columnValue} />)
      }
    </div>
  );
};

export default TableHeader;
