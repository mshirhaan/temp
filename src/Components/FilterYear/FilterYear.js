import React from "react";
import "./FilterYear.css";

function FilterYear({ year, yearFilterHandler, yearSelected, setYear }) {
  return (
    <div className="filterYear">
      <button
        className={yearSelected === year ? "selected" : ""}
        onClick={() => {
          setYear(year);
          yearFilterHandler(year);
        }}
      >
        {year}
      </button>
    </div>
  );
}

export default FilterYear;
