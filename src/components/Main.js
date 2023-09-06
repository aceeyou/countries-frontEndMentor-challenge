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
    setSearch("");
    if (filter === "Filter by region") setCountries(data);
    else {
      setCountries(data);
      setCountries((listOfCountries) =>
        listOfCountries.filter((country) => country.region === filter)
      );
    }
  }, [filter]);

  useEffect(() => {
    setFilter("Filter by region");
    if (search === "") setCountries(data);
    else {
      setCountries(data);
      setCountries((listOfCountries) =>
        listOfCountries.filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

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
        <Filter filter={filter} setFilter={setFilter} />
      </div>

      <Content data={countries} />
    </main>
  );
}
