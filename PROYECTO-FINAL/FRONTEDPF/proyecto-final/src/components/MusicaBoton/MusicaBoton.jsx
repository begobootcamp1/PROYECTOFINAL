import MusicaPopUp from "../MusicaPopUp/MusicaPopUp";
import { useState } from "react";
import Musica from "../../../public/iconos/Musica.jpg";

export default function MusicaBoton() {
  const [showMusica, setShowMusica] = useState(false); // define state variable para controlar el popup

  const handleMusicaClick = () => {
    setShowMusica(!showMusica); // al hacer click el estado de la variable pasa a true
  };
  return (
    <>
      <div>
        <button nombreTarjeta="Musica" onClick={handleMusicaClick}>
          <img src={Musica} alt="musica" />
        </button>
      </div>
      {showMusica && <MusicaPopUp onClick={handleMusicaClick}></MusicaPopUp>}
    </>
  );
}
