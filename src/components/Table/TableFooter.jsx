import React from 'react';

const TableFooter = ({ key, columns, handlePageNumbers, currentPage }) => {
  return (
    <div key={key} className={'table-footer'}>
      {
        columns
          .map(
            (columnValue) => 
              <div className={'table-footer-column'}>
                {
                  Array
                    .isArray(columnValue) ? 
                    columnValue.map(pageNumber => <a className={`page-navigators page-number-spacing ${currentPage === Number(pageNumber) ? 'active-page' : ''}`} value={pageNumber} onClick={handlePageNumbers}>{pageNumber}</a>) : 
                    columnValue
                }
              </div>
          )
      }
    </div>
  );
};

export default TableFooter;
