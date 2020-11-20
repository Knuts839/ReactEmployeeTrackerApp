import React, { useState, useEffect, handleSearchChange } from "react";
import DataTable from "./dataTable";
import Navagation from "./Navigation";
import api from "../utilities/api";
import "../styles/DataArea.css";
import myDataSpot from "../utilities/MyDataSpot";

const DataArea = () => {
    const [developerState, setDeveloperState] = useState({
      users: [],
      order: "descend",
      filteredUsers: [],
      headings: [
        { name: "Image", width: "10%", order: "descend" },
        { name: "name", width: "10%", order: "descend" },
        { name: "phone", width: "20%", order: "descend" },
        { name: "email", width: "20%", order: "descend" },
        { name: "dob", width: "10%", order: "descend" }
      ]
    });

    const handleSort = heading => {
      console.log("HandleSortHit")
        let currentOrder = developerState.headings
          .filter(elem => elem.name === heading)
          .map(elem => elem.order)
          .toString();
    
        if (currentOrder === "descend") {
          currentOrder = "ascend";
        } else {
          currentOrder = "descend";
        }
    
        const compareFnc = (a, b) => {
            if (currentOrder === "ascend") {
              // account for missing values
              if (a[heading] === undefined) {
                return 1;
              } else if (b[heading] === undefined) {
                return -1;
              }
              // numerically
              else if (heading === "name") {
                return a[heading].first.localeCompare(b[heading].first);
              } else if (heading === "dob") {
                return a[heading].age - b[heading].age;
              } else {
                return a[heading].localeCompare(b[heading]);
              }
            } else {
              // account for missing values
              if (a[heading] === undefined) {
                return 1;
              } else if (b[heading] === undefined) {
                return -1;
              }
              // numerically
              else if (heading === "name") {
                return b[heading].first.localeCompare(a[heading].first);
              }else if (heading === "dob") {
                return b[heading].age - a[heading].age;
              }  else {
                return b[heading].localeCompare(a[heading]);
              }
            }
          };
          const sortedUsers = developerState.filteredUsers.sort(compareFnc);
          const updatedHeadings = developerState.headings.map(elem => {
            elem.order = elem.name === heading ? currentOrder : elem.order;
            return elem;
          });
      
          setDeveloperState({
            ...developerState,
            filteredUsers: sortedUsers,
            headings: updatedHeadings
          });
        };
        useEffect(() => {
            api.getUsers().then(results => {
              console.log(results.data.results);
              setDeveloperState({
                ...developerState,
                users: results.data.results,
                filteredUsers: results.data.results
              });
            });
          }, [developerState]);
        
          return (
            <myDataSpot.Provider
              // eslint-disable-next-line no-undef
              value={{ developerState, handleSearchChange, handleSort }}
            >
              <Navagation />
              <div className="data-area">
                {developerState.filteredUsers.length > 0 ? <DataTable /> : <div></div>}
              </div>
            </myDataSpot.Provider>
          );
        };
        
        export default DataArea;
        