import React from 'react';
import Table from '../../Table/Table.jsx';

const ViewConsents = ({ consents }) => {
  const tableHeaders = ['Name', 'Email', 'Consent given for'];
  return (
    <Table tableHeaders={tableHeaders} tableRows={[...consents]} />
  );
};

export default ViewConsents;
