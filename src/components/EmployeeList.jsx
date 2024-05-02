import React from 'react';
import EmployeeListItem from "./EmployeeListItem";

function EmployeeList({ employees }) {
  return (
    <div className="empListContainer">
        {employees.map((employee, index) => (
            <EmployeeListItem key={index} name={employee.name} position={employee.position} image={employee.image} />
        ))}
    </div>
  );
}

export default EmployeeList;