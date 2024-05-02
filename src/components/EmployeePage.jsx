import React from 'react'
import Header from "./Header"
import EmployeeCard from "./EmployeeCard"

const Employeepage = ({title, employees}) => {
  
    return (
    <div className="employeepage">
        Employeepage 
        <Header topic={title}/>
        <EmployeeCard employees={employees} />
    </div>
  )
}
export default Employeepage