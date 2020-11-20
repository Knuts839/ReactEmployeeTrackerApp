
import React from "react";
import searchName from "./searchName.js";
import searchDOB from "./searchDOB.js";
// import "../styles/Nav.css";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse row" id="navbarNav">
        {<div className="input-group col-8">
          <searchDOB />
        </div> }
        <div className="search-area col-4">
          <searchName />
        </div>
      </div>
    </nav>
  );
}
export default Navigation;