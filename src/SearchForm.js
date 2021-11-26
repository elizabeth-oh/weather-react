import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="row">
      <div className="col-9">
        <input
          type="search"
          className="searchForm form-control search-input"
          id="city-input"
          placeholder="Look for a city..."
        />
      </div>
      <div className="col-3">
        <input
          type="submit"
          className="searchButton btn btn-primary w-100"
          value="Search"
        />
      </div>
    </div>
  );
}
