import React from "react";
import "../theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search({ search, setSearch }) {
  const searchContainer = {
    padding: "0 ",
    margin: "25px 0",
  };

  const searchBox = {
    display: "flex",
    alignItems: "center",
    padding: "15px 20px",
    borderRadius: "8px",
    backgroundColor: "var(--elements)",
    boxShadow: "var(--box-shadow)",
  };

  const inputStyle = {
    width: "100%",
    marginLeft: "15px",
    border: "none",
    outline: "none",
    background: "transparent",
    color: "var(--text)",
    fontSize: "14px",
    fontFamily: "Nunito Sans, sans-serif",
  };

  const iconStyle = {
    color: "var(--text)",
  };
  return (
    <div className="search-container" style={searchContainer}>
      <style>{`#search::-webkit-input-placeholder { color: var(--text)}`}</style>
      <div className="search-box" style={searchBox}>
        <FontAwesomeIcon
          className="search-icon"
          style={iconStyle}
          icon={faMagnifyingGlass}
        />
        <input
          name="search"
          style={inputStyle}
          className="search-input"
          id="search"
          type="text"
          placeholder="Search for a coutry..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
