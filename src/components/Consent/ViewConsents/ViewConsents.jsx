import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../Table/Table.jsx';

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
