import React from "react";
import "./EmergenciaPopUp.css";
import Emergencia from "../Emergencia/Emergencia";

export default function EmergenciaPopup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={props.onClose}>
          Cerrar
        </button>
        <h3>Emergencia</h3>
        <Emergencia />
      </div>
    </div>
  );
}
