import React from "react";
import "./RocketCard.css";

function RocketCard({
  missionName,
  flightNumber,
  image,
  launchYear,
  launchSuccess,
}) {
  return (
    <div className="rocketCard">
      <img src={image} alt="" />
      <h4>
        {missionName} #{flightNumber}
      </h4>
      <div className="rocket__info">
        <h5>Mission_id: </h5>
        <h5>Launch year: {launchYear} </h5>
        <h5>Successful Launch : {String(launchSuccess)} </h5>
        <h5>Successful Landing : </h5>
      </div>
    </div>
  );
}

export default RocketCard;
