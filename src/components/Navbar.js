import React from "react";
import SearchBox from "./SearchBox";
import FetchUser from "./FetchUser";
// import Moment from "moment";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white text-center">
        <h1 className="navbar-brand text-white">Employee Directory</h1>
        <h6>
          Click on carrots to filter by heading or use the search box to narrow
          your results.
        </h6>
      </nav>
      <SearchBox />
      <FetchUser />
    </div>
  );
}

export default Navbar;
