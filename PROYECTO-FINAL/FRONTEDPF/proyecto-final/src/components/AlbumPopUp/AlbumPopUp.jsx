import React from "react";
import "./AlbumPopUp.css";
//import Album from "../Album/Album";
import Carousel from "../Carousel/Carousel";

export default function AlbumPopup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={props.onClick}>
          Cerrar
        </button>
        <h1>Album Fotos</h1>
        <Carousel />
      </div>
    </div>
  );
}
