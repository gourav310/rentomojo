import React from "react";
import { Button } from "reactstrap";
//used to render comments with simnple data
export default function comment(props) {
  return (
    <li>
      <div className="col title0" style={{ padding: "10px" }}>
        <h6>{props.name}</h6>
      </div>
      <div className="col title1"> {props.body} </div>
    </li>
  );
}
