import React from "react";
import "./MusicaPopUp.css";
import Musica from "../Musica/Musica";

export default function MusicaPopup(props) {
  return (
    <div className="popup">
      <div>
        <Musica listaCanciones={listaCanciones} />
      </div>

      <div className="popup-content">
        <div>
          <button className="close-button" onClick={props.onClose}>
            Cerrar
          </button>
        </div>
        <h3>Música</h3>
      </div>
    </div>
  );
}
