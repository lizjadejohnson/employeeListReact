import React from 'react'
import Header from "./Header"
import SearchBar from "./SearchBar"
import EmployeeList from "./EmployeeList"

const Homepage = ({title, employees}) => {
  return (
    <div className="homepage">
        Homepage 
        <Header topic={title}/>
        <SearchBar />
        <EmployeeList employees={employees} />
    </div>
  )
}
export default Homepage