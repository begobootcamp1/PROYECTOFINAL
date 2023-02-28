import React from "react";
import "./ContactoPopUp.css";
import Card from "../Card/CardContacto";

export default function ContactoPopup(props) {
  return (
    <>
      <div className="popup">
        <div className="popup-content">
          <div>
            <CardContacto />
          </div>
          <div>
            <button className="close-button" onClick={props.onClick}>
              Cerrar
            </button>
          </div>
          <h3>Pastillero</h3>
        </div>
      </div>
    </>
  );
}
