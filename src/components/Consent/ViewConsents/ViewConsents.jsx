import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../Table/Table.jsx';

/**
 * @desc This component is responsible for displaying consents saved by the user
 * @param {Array} consents : This is an array of consents passed in as a prop used to populate the choice of consents
 * @returns {JSX}
 */
const ViewConsents = ({ consents }) => {
  const tableHeaders = ['Name', 'Email', 'Consent given for'];
  return (
    <Table tableHeaders={tableHeaders} tableRows={[...consents]} />
  );
};

ViewConsents.propTypes = {
  consents: PropTypes.array
};

export default ViewConsents;
