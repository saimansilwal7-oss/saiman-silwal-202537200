import React from "react";

const filters = ["ALL", "REACT", "NODE", "CSS"];

function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter projects by technology">
      {filters.map((filter) => (
        <button
          className={activeFilter === filter ? "filter-button active" : "filter-button"}
          type="button"
          key={filter}
          onClick={() => onFilterChange(filter)}
          aria-pressed={activeFilter === filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;