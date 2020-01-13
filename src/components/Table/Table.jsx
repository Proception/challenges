import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader.jsx';
import TableRow from './TableRow.jsx';
import TableFooter from './TableFooter.jsx';

import './table.scss';
/**
 * @desc This is a reusable table component
 * @param {Array} tableRows : This is a prop passed to the table component with the table rows
 * @param {Array} tableHeaders : This contains the menu ID, action, and value
 * @returns {JSX}
 */
export default class Table extends Component {

  constructor () {
    super();
    this.state = {
      currentPage: 1,
      pages: [],
      displayRows: []
    };
  }

  componentDidMount() {
    this.formatPages();
  }

  handlePreviousPage = (e) => {
    const {currentPage} = this.state;
    this.displayPage(Number(currentPage) - 1);
  }

  handleNextPage = (e) => {
    const {currentPage} = this.state;
    this.displayPage(Number(currentPage) + 1);
  }

  handlePageNumbers = (e) => {
    const {currentPage} = this.state;
    const pageNumber = e.target.getAttribute('value');

    if (pageNumber !== currentPage) {
      this.displayPage(pageNumber);
    }
  }

  displayPage = (pageNumber) => {
    const {pages} = this.state;
    const displayPage = pages.filter(page => page[pageNumber]);
    this.setState({
      displayRows: displayPage[0][pageNumber],
      currentPage: Number(pageNumber)
    });
  }

  formatPages = () => {
    const {tableRows:consents} = this.props;
    const pageDataArray = [];
    const consentsCountLessThanThree = consents.length < 3;
    const consentsCountEqualToThree = consents.length === 3;
    const consentsCountGreaterThanThree = consents.length > 3;

    if (consentsCountLessThanThree) {
      pageDataArray[0] = {1: [consents[0], consents[1] ? consents[1] : '']};
    }

    if (consentsCountEqualToThree) {
      pageDataArray[0] = {1: [consents[0], consents[1] ? consents[1] : '']};
      pageDataArray[1] = {2: [consents[2]]};
    }

    if (consentsCountGreaterThanThree) {
      const pages = consents.length;
      let pageNumber = 1;
      for (let index = 0; index < pages;) {
        const key = pageNumber;
        const value = [consents[index], consents[index + 1] ? consents[index + 1] : ''];
        const pageData = {};
        pageData[key] = value;
        pageDataArray[pageNumber - 1] = pageData;
        index = index + 2;
        pageNumber++;
      }
    }

    if (consents.length > 0) {
      this.setState(prevState => {
        return {
          ...prevState,
          pages: pageDataArray
        };
      }, () => {
        if (this.state.displayRows.length === 0) {
          this.displayPage(1);
        }
      }
      );
    }
  }

  renderTableHeader = () => {
    const {tableHeaders} = this.props;
    return <TableHeader columns={tableHeaders}/>;
  }

  renderTableBody = () => {
    const {displayRows} = this.state;
    return <div className={'table-body'}><TableRow rows={displayRows}/></div>;
  }

  renderTableFooter = () => {
    const {currentPage, pages} = this.state;
    const remainingPages = pages.length - currentPage;
    const nextPage = <a className={'page-navigators'} onClick={this.handleNextPage}>
      { pages.length > 1 && remainingPages > 0 ? 'Next page  >>' : ''}
    </a>;
    const previousPage = <a className={'page-navigators'} onClick={this.handlePreviousPage}>
      { currentPage > 1 ? '<<  Previous page' : ''}
    </a>;
    const pageNumbers = pages.map(page => Object.keys(page));

    return <div className={'table-footer'}>
      <TableFooter currentPage={currentPage} handlePageNumbers={this.handlePageNumbers} columns={
        [
          previousPage, 
          pageNumbers, 
          nextPage
        ]}/>
    </div>;
  }

  render() {
    return <div className={'table-container'}>
      {
        this.renderTableHeader()
      }
      {
        this.renderTableBody()
      }
      {
        this.renderTableFooter()
      }
    </div>;
  }
}

Table.propTypes = {
  tableRows: PropTypes.array,
  tableHeaders: PropTypes.array
};
