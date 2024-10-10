import React from 'react';
import './table.css'
import DataTable from 'react-data-table-component';

const Table = () => {
  const data = [
    { id: 1, name: 'Ram Prasad', email: 'rcnns@', address: 'Nepal' },
    { id: 2, name: 'Shyam', email: 'dsmmkrkd', address: 'India' },
    { id: 3, name: 'Radha', email: 'l,cdamofkcf', address: 'Pakistan' },
    { id: 4, name: 'Sohan', email: 'kdmcemr,klm', address: 'USA' },
  ];

  const columns = [
    { name: 'Id', selector: 'id', sortable: true },
    { name: 'Name', selector: 'name', sortable: true },
    { name: 'Email', selector: 'email', sortable: true },
    { name: 'Address', selector: 'address', sortable: true },
  ];

  return (
    <div>
      <h2>User Data</h2>
      <DataTable
        columns={columns}
        data={data}
        // pagination
        // highlightOnHover
        // striped
      />
    </div>
  );
};

export default Table;
