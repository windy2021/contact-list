import React from "react";
import "./Row.css";

function Row(props) {
  return (
    <div className="row_container">
      <div>
        <p className="row_text">Name: {props.name} ({props.id})</p>
        <p className="row_text">Phone: {props.phone}</p>
        <p className="row_text">Email: {props.email}</p>
        <p className="row_text">Addrs: {props.address}</p>
      </div>

      <div>
        <img
          src="./contact-list/images/phone-flat.png"
          alt="phone"
          className="row_image"
        ></img>
      </div>
    </div>
  );
}

export default Row;
