import React from "react";
import RocketCard from "../RocketCard/RocketCard";
import "./Feed.css";

function Feed({ data }) {
  return (
    <div className="feed">
      <div className="feed__cards">
        {data.map((info) => (
          <RocketCard
            key={info.flight_number}
            missionName={info.mission_name}
            flightNumber={info.flight_number}
            image={info.links.mission_patch_small}
            launchYear={info.launch_year}
            launchSuccess={info.launch_success}
            data={info}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
