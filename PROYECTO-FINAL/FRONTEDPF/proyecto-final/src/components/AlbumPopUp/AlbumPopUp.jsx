import React from "react";
import "./AlbumPopUp.css";
import Album from "../Album/Album";

export default function AlbumPopup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={props.onClose}>
          Cerrar
        </button>
        <h3>Album Fotos</h3>
        <Album />
      </div>
    </div>
  );
}
