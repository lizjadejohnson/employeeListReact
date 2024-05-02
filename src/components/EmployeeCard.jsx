import React from 'react'
import ContactItem from "./ContactItem"
import EmployeeListItem from "./EmployeeListItem"


function EmployeeCard({ employees }) {
  return (
    <div className="empCard">
        <EmployeeListItem employees={employees} />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
    </div>
  )
}

export default EmployeeCard