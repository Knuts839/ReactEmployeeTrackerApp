import React, { useContext } from "react";
// import "../styles/SearchName.css";
import myDataSpot from "../utilities/myDataSpot";

const searchName = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(myDataSpot);

  return (
    <div className="searchbox">
      <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Search
            </span>
          </div>
          <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="name"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
        </div>
    </div>
  );
}
export default searchName;