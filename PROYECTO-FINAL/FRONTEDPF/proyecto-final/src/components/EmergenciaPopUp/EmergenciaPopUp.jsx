import React from "react";
import "./EmergenciaPopUp.css";

export default function EmergenciaPopup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={props.onClick}>
          Cerrar
        </button>
        <h3>Llamar a contacto</h3>
      </div>
    </div>
  );
}
