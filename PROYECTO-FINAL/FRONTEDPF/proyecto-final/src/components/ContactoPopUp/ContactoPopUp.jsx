import React from "react";
import "./ContactoPopUp.css";

export default function ContactoPopup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={props.onClose}>
          Cerrar
        </button>
        <h3>Contacto</h3>
      </div>
    </div>
  );
}
