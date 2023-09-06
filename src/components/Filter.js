import React, { useState } from "react";
import "./Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Filter({ filter, setFilter }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleRegionSelect = (region) => {
    setFilter(region);
    setIsOpen(false);
  };

  const filterContainer = {
    position: "relative",
    padding: "0 20px",
  };

  const filterDisplay = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "180px",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "var(--elements)",
    cursor: "pointer",
  };

  const filterItemsContainer = {
    position: "absolute",
    top: "54px",
    left: "20px",
    backgroundColor: "var(--elements)",
    borderRadius: "8px",
    width: "180px",
    padding: "15px",
  };

  const filterDisplayContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const resetFilterButton = {
    backgroundColor: "var(--elements)",
    borderRadius: "5px",
    padding: "5px 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "300",
  };

  return (
    <div className="filterContainer" aria-label="region filter selector">
      <div className="filterDisplayContainer">
        <div
          className="filterDisplay"
          aria-label="filter display"
          onClick={() => setIsOpen((c) => !c)}
        >
          <p>{filter}</p>
          <FontAwesomeIcon
            style={{
              transform: `rotate(${isOpen ? "-180deg" : "0deg"}  )`,
              transition: "150ms",
            }}
            fontSize={12}
            icon={faChevronDown}
          />
        </div>
        {filter !== "Filter by region" && (
          <button
            className="resetFilterButton"
            onClick={() => handleRegionSelect("Filter by region")}
          >
            reset filter
          </button>
        )}
      </div>
      {/* Regions */}
      {isOpen && (
        <div className="filterItemsContainer">
          <FilterItems region="Africa" onRegionSelect={handleRegionSelect} />
          <FilterItems region="Americas" onRegionSelect={handleRegionSelect} />
          <FilterItems region="Asia" onRegionSelect={handleRegionSelect} />
          <FilterItems region="Europe" onRegionSelect={handleRegionSelect} />
          <FilterItems region="Oceania" onRegionSelect={handleRegionSelect} />
        </div>
      )}
    </div>
  );
}

function FilterItems({ region, onRegionSelect }) {
  const filterItem = {
    padding: "5px",
  };
  return (
    <p
      role="button"
      style={filterItem}
      aria-label="region filter item"
      onClick={() => onRegionSelect(region)}
    >
      {region}
    </p>
  );
}
