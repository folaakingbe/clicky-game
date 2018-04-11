import React from "react";
import "./SignCard.css";

const SignCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.memoryCheck(props.id)}/>
    </div>
  </div>
);

export default SignCard;
