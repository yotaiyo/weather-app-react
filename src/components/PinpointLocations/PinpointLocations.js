import React from "react";
import "./PinpointLocations.css";

const PinpointLocations = (props) => {
  return (
  <div className="pinpoint-locations-area">
    <div className="pinpoint-locations-title"> {"詳細な天気"}　</div>
    <div className="pinpoint-locations-link">
      <ul>
        {props.pinpointLocations.map((input) =>
          <li key={input.name}><a href={input.link}>{input.name}</a></li>
        )}
      </ul>
    </div>
  </div>
)
}


export default PinpointLocations;
