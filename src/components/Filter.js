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
      </div>
      {/* Regions */}
      {isOpen && (
        <div className="filterItemsContainer">
          {/* <p className="filter__filter-item">hello</p> */}
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
  return (
    <p
      className="filter__filter-item"
      role="button"
      aria-label="region filter item"
      onClick={() => onRegionSelect(region)}
    >
      {region}
    </p>
  );
}
