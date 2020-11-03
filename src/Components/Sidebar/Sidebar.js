import React, { useState } from "react";
import "./Sidebar.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import FilterYear from "../FilterYear/FilterYear";

function Sidebar({
  yearFilterHandler,
  launchFilterHandler,
  landingFilterHandler,
}) {
  const [yearSelected, setYearSelected] = useState(null);
  const [launchButton, setLaunchButton] = useState(null);
  const [landButton, setLandButton] = useState(null);
  const yearButtons = [];

  const setLaunchClassName = (value) => {
    if (launchButton === value) {
      setLaunchButton(null);
    } else {
      setLaunchButton(value);
    }
  };

  const setLandClassName = (value) => {
    if (landButton === value) {
      setLandButton(null);
    } else {
      setLandButton(value);
    }
  };

  const setYear = (value) => {
    if (yearSelected === value) {
      setYearSelected(null);
    } else {
      setYearSelected(value);
    }
  };

  for (let i = 2006; i <= 2020; i++) {
    yearButtons.push(
      <FilterYear
        key={i}
        yearSelected={yearSelected}
        setYear={setYear}
        year={i}
        yearFilterHandler={yearFilterHandler}
      />
    );
  }

  return (
    <div className="sidebar">
      <h3>
        <TuneOutlinedIcon /> Filters
      </h3>
      <h4>Launch Year</h4>
      <div className="sidebar__filterYears">{yearButtons}</div>
      <h4> Succesful Launch </h4>
      <div className="sidebar__launch">
        <div className="sidebar__launchButtons">
          <button
            className={launchButton === true ? "selected" : ""}
            onClick={() => {
              setLaunchClassName(true);
              launchFilterHandler(true);
            }}
          >
            True
          </button>
          <button
            className={launchButton === false ? "selected" : ""}
            onClick={() => {
              setLaunchClassName(false);
              launchFilterHandler(false);
            }}
          >
            False
          </button>
        </div>
      </div>

      <h4> Succesful Landing </h4>
      <div className="sidebar__landing">
        <div className="sidebar__landingButtons">
          <button
            className={landButton === true ? "selected" : ""}
            onClick={() => {
              setLandClassName(true);
              landingFilterHandler(true);
            }}
          >
            True
          </button>
          <button
            className={landButton === false ? "selected" : ""}
            onClick={() => {
              setLandClassName(false);
              landingFilterHandler(false);
            }}
          >
            False
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
