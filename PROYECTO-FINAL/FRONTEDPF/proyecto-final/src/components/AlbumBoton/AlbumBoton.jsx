import Boton from "../Boton/Boton";
import AlbumPopUp from "../AlbumPopUp/AlbumPopUp";
import { useState } from "react";

export default function AlbumBoton() {
  const [showAlbum, setShowAlbum] = useState(false); // define state variable para controlar el popup

  const handleAlbumClick = () => {
    setShowAlbum(true); // al hacer click el estado de la variable pasa a true
  };

  const handleAlbumClose = () => {
    setShowAlbum(false); // cuando cerramos el popup el estado de la variable pasa a falso
  };
  return (
    <>
      <Boton nombreTarjeta="Album" onClick={handleAlbumClick} />
      {/* pasa el nombre de la tarjeta como una propiedad del componente Boton y maneja el evento click */}
      {showAlbum && <AlbumPopUp onClose={handleAlbumClose} />}
      {/* se ve el componente CalendarioPopup cuando el estado de la variable es true */}
      {/* enviarle al botón un parámetro con el nombre de la tarjeta, en este caso el calen
      dario. El botón recibe ese parámetro y debería llamar al popup de la tarjeta que corresponde con ese parámetro 
      El popup sería el calendario y un botón para cerrar*/}
      <h2>Album</h2>
    </>
  );
}
// el componente boton recive la propiedad nombreTarjeta con el valor CalendarioEvento. El evento ocClick se
//maneja con la función handleCalendarioClick function, que pone el estado de la variable showCalendario state
// a true. El componente CalendarioPopUp es importado y se renderiza usando el estado de la variable
//showCalendario, que recibe una propiedad onClose, que maneja el evento de cierre deteando el estado
//de la variable showCalendario a false.
