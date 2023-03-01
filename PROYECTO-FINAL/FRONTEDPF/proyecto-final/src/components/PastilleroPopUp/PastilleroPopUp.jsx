import React from "react";
import "./PastilleroPopUp.css";

export default function PastilleroPopup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={props.onClick}>
          Cerrar
        </button>
        <Pastillero />
      </div>
    </div>
  );
}
