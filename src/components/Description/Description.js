import React from "react";
import "./Description.css";

const Description = (props) => {
  return(
    <div className="description-area">
      <div className="description-title"> {props.description.title} </div>
      <div> {props.description.description.text} </div>
    </div>
  )
}

export default Description;
