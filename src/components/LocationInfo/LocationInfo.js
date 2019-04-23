import React from "react";
import "./LocationInfo.css"

const LocationInfo = ({locationArea,locationPrefecture,locationCity}) => {
   let displayText = ""
   if (locationArea){
    displayText= `${locationArea} > ${locationPrefecture} > ${locationCity}`
  }
  return (
    <div className="location-info-area">
      <div className="location-info"> {displayText}</div>
    </div>
  )
};

export default LocationInfo;
