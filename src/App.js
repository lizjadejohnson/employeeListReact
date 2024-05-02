import './App.css';

import EmployeePage from './components/EmployeePage';
import Homepage from './components/Homepage';


// This is the Main [CEO] file --> Primary State Lives Here
// Components are housed here
// Hooks === useState, useEffect  

function App() {
  // Data that will be distributed to the components in our page
  const topics = ["Employee Directory", "Employee"]

  // 1. Make employee data (this will eventually represent our state but right now its manually entered data):
  let allEmployees = [
    {
      name: "James King",
      position: "President and CEO",
      image: "",
    },
    {
      name: "Julie Taylor",
      position: "VP of Marketing",
      image: "",
    },
    {
      name: "Eugene Lee",
      position: "CFO",
      image: "",
    },
    {
      name: "John Williams",
      position: "VP of Engineering",
      image: "",
    },
    {
      name: "Ray Moore",
      position: "VP of Sales",
      image: "",
    },
    {
      name: "Paul Jones",
      position: "QA Manager",
      image: "",
    },
  ];

  return (
    <div className="App">
      {/* Here we are passing in our allEmployees data as props into Homepage: */}
      <Homepage employees={allEmployees} title={topics[0]}/>
      {/* Here we are passing in our allEmployees data as props into EmplyeePage, separately: */}
      <EmployeePage employees={allEmployees} title={topics[1]}/>
      
        
    </div>
  );
}

export default App;