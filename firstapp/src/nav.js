import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Employee = ({ employees }) => {
  return (
    <div className="container mt-4 col-lg-5">
      <table className="table table-bordered table-striped ">
        <thead className="thead-light">
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.empId}>
              <td>{employee.empId}</td>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
