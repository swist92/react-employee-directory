import React from "react";
// import Moment from "moment";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="user"
          type="text"
          className="form-control"
          placeholder="Search Employee Here"
          id="employee"
        />
        {/* <datalist id="breeds">
            {props.breeds.map(breed => (
              <option value={breed} key={breed} />
            ))}
          </datalist> */}
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
