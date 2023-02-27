import React from "react";
import "./PastilleroPopUp.css";
import Pastillero from "../Pastillero/Pastillero";

export default function PastilleroPopup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={props.onClose}>
          Cerrar
        </button>
        <h3>Pastillero</h3>
        <Pastillero />
      </div>
    </div>
  );
}
