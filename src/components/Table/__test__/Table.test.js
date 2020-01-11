import React from 'react';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import TableColumn from '../TableColumn.jsx';
import TableRow from '../TableRow.jsx';
import TableHeader from '../TableHeader.jsx';
import TableFooter from '../TableFooter.jsx';
import Table from '../Table.jsx';
import {
  pageNumberEvent,
  preventDefault
} from '../../../../__mocks__/tableMocks';


describe('Table component', () => {
  describe('TableColumn component', () => {
    it('should render column correctly if a single value is passed', () => {
      const component = renderer.create(
        <TableColumn value={'beans'}/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render column correctly if an array is passed', () => {
      const component = renderer.create(
        <TableColumn value={['beans', 'rice']}/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render column with expected value', () => {
      const columnData = 'beans';
      const tree = renderer.create(
        <TableColumn value={columnData}/>,
      );

      const instance = tree.root;
      const columnValue = instance.findAllByProps({className: 'table-column'});
      expect(columnValue.length).toEqual(1);
      expect(columnValue[0].children[0]).toEqual(columnData);
    });
    it('should render column with expected array values', () => {
      const columnData = ['beans', 'rice'];
      const tree = renderer.create(
        <TableColumn value={columnData}/>,
      );

      const instance = tree.root;
      const columnValue = instance.findAllByProps({className: 'table-column'});
      expect(columnValue.length).toEqual(1);
      expect(columnValue[0].children).toEqual([`${columnData[0]}, ${columnData[1]}`]);
    });
  });
  describe('TableRow component', () => {
    it('should render no data message if no row data is passed', () => {
      const component = renderer.create(
        <TableRow rows={[]}/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render row correctly if row data is passed', () => {
      const rowData = [
        {name: 'Benedict', email: 'omasan.esimaje@gmail.com', consents: [
          'Receive Newsletter', 'Be shown targeted ads'
        ]}
      ];
      const component = renderer.create(
        <TableRow rows={[...rowData]}/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('TableHeader component', () => {
    it('should render table headers', () => {
      const component = renderer.create(
        <TableHeader columns={['Name', 'Email', 'Consent given for']}/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('TableFooter component', () => {
    it('should render table footer correctly', () => {
      const component = renderer.create(
        <TableFooter columns={['<< Previous page', [1,2,3], 'Next page >>']} handlePageNumbers={() => {}} currentPage= {1}/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('Table component', () => {
    it('should render table component with excatly 3 consents', () => {
      const tableHeaders = ['Name', 'Email', 'Consent given for'];
      const consents = [
        {name: 'Benedict', email: 'omasan.esimaje@gmail.com', consents: ['Receive Newsletter','Be shown targeted ads']},
        {name: 'Omasan',email: 'benedict.esimaje@gmail.com',consents: ['Be shown targeted ads']},
        {name: 'Micheal',email: 'omasan@gmail.com', consents: ['Receive Newsletter', 'Be shown targeted ads']}
      ];
      const component = renderer.create(
        <Table tableHeaders={tableHeaders} tableRows={[...consents]}/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render table component with more than 3 consents', () => {
      const tableHeaders = ['Name', 'Email', 'Consent given for'];
      const consents = [
        {name: 'Benedict', email: 'omasan.esimaje@gmail.com', consents: ['Receive Newsletter','Be shown targeted ads']},
        {name: 'Omasan',email: 'benedict.esimaje@gmail.com',consents: ['Be shown targeted ads']},
        {name: 'Micheal',email: 'omasan@gmail.com', consents: ['Receive Newsletter', 'Be shown targeted ads']},
        {name: 'Micheal',email: 'oman@gmail.com', consents: ['Receive Newsletter', 'Be shown targeted ads']}
      ];
      const component = renderer.create(
        <Table tableHeaders={tableHeaders} tableRows={[...consents]}/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render table component with less than 3 consents', () => {
      const tableHeaders = ['Name', 'Email', 'Consent given for'];
      const consents = [
        {name: 'Benedict', email: 'omasan.esimaje@gmail.com', consents: ['Receive Newsletter','Be shown targeted ads']},
        {name: 'Omasan',email: 'benedict.esimaje@gmail.com',consents: ['Be shown targeted ads']}
      ];
      const component = renderer.create(
        <Table tableHeaders={tableHeaders} tableRows={[...consents]}/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should navigate to selected page using page numbers', () => {
      const tableHeaders = ['Name', 'Email', 'Consent given for'];
      const consents = [
        {name: 'Benedict', email: 'omasan.esimaje@gmail.com', consents: ['Receive Newsletter','Be shown targeted ads']},
        {name: 'Omasan',email: 'benedict.esimaje@gmail.com',consents: ['Be shown targeted ads']},
        {name: 'Micheal',email: 'omasan@gmail.com', consents: ['Receive Newsletter', 'Be shown targeted ads']},
        {name: 'Micheal',email: 'oman@gmail.com', consents: ['Receive Newsletter', 'Be shown targeted ads']}
      ];
      const wrapper = shallow(<Table tableHeaders={tableHeaders} tableRows={[...consents]} />);
      sinon.spy(wrapper.instance(), 'handlePageNumbers');

      wrapper.instance().handlePageNumbers(pageNumberEvent);

      expect(wrapper.instance().handlePageNumbers.calledOnce)
        .toEqual(true);
      expect(wrapper.instance().handlePageNumbers.calledWith(pageNumberEvent)).toEqual(true);
    });
    it('should navigate to next page using handleNextPage and handlePreviousPage', () => {
      const tableHeaders = ['Name', 'Email', 'Consent given for'];
      const consents = [
        {name: 'Benedict', email: 'omasan.esimaje@gmail.com', consents: ['Receive Newsletter','Be shown targeted ads']},
        {name: 'Omasan',email: 'benedict.esimaje@gmail.com',consents: ['Be shown targeted ads']},
        {name: 'Micheal',email: 'omasan@gmail.com', consents: ['Receive Newsletter', 'Be shown targeted ads']},
        {name: 'Micheal',email: 'oman@gmail.com', consents: ['Receive Newsletter', 'Be shown targeted ads']}
      ];
      const wrapper = shallow(<Table tableHeaders={tableHeaders} tableRows={[...consents]} />);
      sinon.spy(wrapper.instance(), 'handleNextPage');
      sinon.spy(wrapper.instance(), 'handlePreviousPage');

      wrapper.instance().handleNextPage();
      wrapper.instance().handlePreviousPage();

      expect(wrapper.instance().handleNextPage.calledOnce)
        .toEqual(true);
      expect(wrapper.instance().handlePreviousPage.calledOnce)
        .toEqual(true);
    });
  });

});
