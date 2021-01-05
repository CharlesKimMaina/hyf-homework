import React, { useState } from 'react'
import TimeCalculator from './TimeCalculator';
import { registrationDetails } from './registrationDetails';



function EmployeeSearch() {
    
    const [search, setSearch] = useState([]);
    return (
        <div>
          <input
              type="search"
              placeholder="Search by Name"
              onChange={(e) => {
                if (search.length !== 0) {
                  const searchName = search.filter((name) => {
                    return name.empName
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase());
                  });
                  setSearch(searchName);
                }
              }}
            ></input>
            <div>
              {search.map((empName) => {
                return <registrationDetails text={empName}></registrationDetails>;
              })}
            </div>
            <div>
              {search.map((hours) => {
                return <TimeCalculator text={hours}></TimeCalculator>;
              })}
              </div> 
                
        </div>
    )
}

export default EmployeeSearch



