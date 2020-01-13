import React from 'react';
import PropTypes from 'prop-types';


/**
 * @desc This is a reusable table footer component. 
 * @param {Array} columns : This is a prop passed to the table footer component for the footer
 * @param {Function} handlePageNumbers : This is a prop passed to the table footer component to handle clicking page numebrs for page navigation
 * @param {String} currentPage : This is a prop passed to the table footer component to determine which page is currently selected
 * @returns {JSX}
 */
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
