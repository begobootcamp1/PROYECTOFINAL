import AlbumPopUp from "../AlbumPopUp/AlbumPopUp";
import { useState } from "react";
import Album from "../../../public/iconos/Album.jpg";

export default function AlbumBoton() {
  const [showAlbum, setShowAlbum] = useState(false); // define state variable para controlar el popup

  const handleAlbumClick = () => {
    setShowAlbum(!showAlbum); // al hacer click el estado de la variable pasa a true
  };
  return (
    <>
      <div>
        <button nombreTarjeta="Album" onClick={handleAlbumClick}>
          <img src={Album} alt="album" />
        </button>
      </div>
      {showAlbum && <AlbumPopUp onClick={handleAlbumClick}></AlbumPopUp>}
    </>
  );
}
