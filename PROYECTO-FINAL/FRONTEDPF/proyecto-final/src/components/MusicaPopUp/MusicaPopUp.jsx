import React from "react";
import "./MusicaPopUp.css";
import Musica from "../Musica/Musica";

export default function MusicaPopup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={props.onClose}>
          Cerrar
        </button>
        <h3>Música</h3>
        <Musica />
      </div>
    </div>
  );
}
