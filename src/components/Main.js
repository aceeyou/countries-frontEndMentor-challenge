import React, { useEffect, useState } from "react";
import "./Main.css";
import Search from "./Search";
import Filter from "./Filter";
import Content from "./Content";

let data = require("../data.json");

export default function Main() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Filter by region");

  const [countries, setCountries] = useState(data);

  useEffect(() => {
    setCountries(data);
    if (search) {
      setCountries((listOfCountries) =>
        listOfCountries.filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    if (filter === "Filter by region") setCountries(data);
    else {
      setCountries((listOfCountries) =>
        listOfCountries.filter((country) => country.region === filter)
      );
    }
  }, [filter, search]);

  useEffect(() => {
    setCountries(data);
    // else {
    setCountries((listOfCountries) =>
      listOfCountries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    // }
  }, [search]);

  const handleResetFilters = () => {
    setFilter("Filter by region");
    setSearch("");
  };

  const queryResultsStyle = {
    textAlign: "center",
    marginBottom: "25px",
    opacity: "0.3",
  };

  return (
    <main>
      <div className="desktop__search-filter-row">
        <div className="desktop__search-group">
          <Search search={search} setSearch={setSearch} />
          {search !== "" && (
            <div style={queryResultsStyle} className="search-query-results">
              <p>
                Found {countries.length} countries with "{search}"
              </p>
            </div>
          )}
        </div>
        <div className="main__filter-container">
          {filter !== "Filter by region" && (
            <div className="reset-btn-container">
              <button onClick={() => handleResetFilters()}>reset filter</button>
            </div>
          )}
          <Filter filter={filter} setFilter={setFilter} />
        </div>
      </div>

      <Content data={countries} />
    </main>
  );
}
