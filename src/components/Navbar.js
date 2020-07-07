import React from "react";
import SearchBox from "./SearchBox";
import FetchUser from "./FetchUser";

function Navbar(props) {
  
  
  


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
        <h1 className="navbar-brand">Employee Directory</h1>
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
