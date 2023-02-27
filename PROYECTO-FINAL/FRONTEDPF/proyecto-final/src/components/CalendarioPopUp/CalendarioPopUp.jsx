import React from "react";
import "./CalendarioPopUp.css";
import CalendarioEvento from "../CalendarioEvento/CalendarioEvento";

export default function CalendarioPopup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={props.onClose}>
          Cerrar
        </button>
        <h3>Calendario Eventos</h3>
        <CalendarioEvento />
      </div>
    </div>
  );
}
