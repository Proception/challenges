import React from 'react';
import PropTypes from 'prop-types';

const TableFooter = ({ columns, handlePageNumbers, currentPage }) => {
  return (
    <div className={'table-footer'}>
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


TableFooter.propTypes = {
  columns: PropTypes.array,
  handlePageNumbers: PropTypes.func,
  currentPage: PropTypes.number
};

export default TableFooter;
