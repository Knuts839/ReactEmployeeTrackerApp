
import React, { useContext } from "react";
import DataBody from "./EmployeeDataBodyx";
import "../styles/DataTable.css";
import myDataSpot from "../utilities/myDataSpot";

const DataTable = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(myDataSpot);

  return (

    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    // context.handleSort(name.toLowerCase());
                    context.handleSort(name);
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <DataBody />
      </table>
    </div>
  );
}

export default DataTable;