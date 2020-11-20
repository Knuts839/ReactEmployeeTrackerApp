
import React, { useContext } from "react";
import myDataSpot from "../utilities/MyDataSpot";

const SearchDOB = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(myDataSpot);

  return (
    <div className="searchbox">
       <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="">
          DOB
          </span>
      </div>
      <input type="date" className="form-control"   onChange={e => context.handleSearchChange(e)}/>
      <input type="date" className="form-control"   onChange={e => context.handleSearchChange(e)}/>
      </div>
    </div>
  );
};
export default SearchDOB;