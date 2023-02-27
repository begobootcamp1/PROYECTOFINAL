import Boton from "../Boton/Boton";
import PastilleroPopUp from "../PastilleroPopUp/PastilleroPopUp";
import { useState } from "react";

export default function PastilleroBoton() {
  const [showPastillero, setShowPastillero] = useState(false); // define state variable para controlar el popup

  const handlePastilleroClick = () => {
    setShowPastillero(true); // al hacer click el estado de la variable pasa a true
  };

  const handlePastilleroClose = () => {
    setShowPastillero(false); // cuando cerramos el popup el estado de la variable pasa a falso
  };
  return (
    <>
      <Boton nombreTarjeta="Pastillero" onClick={handlePastilleroClick} />
      {/* pasa el nombre de la tarjeta como una propiedad del componente Boton y maneja el evento click */}
      {showPastillero && <PastilleroPopUp onClose={handlePastilleroClose} />}
      {/* se ve el componente PastilleroPopup cuando el estado de la variable es true */}
      {/* enviarle al botón un parámetro con el nombre de la tarjeta, en este caso el pastillero.
       El botón recibe ese parámetro y debería llamar al popup de la tarjeta que corresponde con ese parámetro 
      El popup sería el pastillero y un botón para cerrar*/}
      <h2>Pastillero</h2>
    </>
  );
}
// el componente boton recive la propiedad nombreTarjeta con el valor Pastillero. El evento ocClick se
//maneja con la función handlePastilleroClick function, que pone el estado de la variable showPastillero pasa
// a true. El componente PastilleroPopUp es importado y se renderiza usando el estado de la variable
//showPastillero, que recibe una propiedad onClose, que maneja el evento de cierre deteando el estado
//de la variable showPastillero a false.
