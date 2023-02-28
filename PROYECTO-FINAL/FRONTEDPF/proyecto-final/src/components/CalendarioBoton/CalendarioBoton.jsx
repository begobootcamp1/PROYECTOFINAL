import CalendarioPopUp from "../CalendarioPopUp/CalendarioPopUp";
import { useState } from "react";
import Eventos from "../../../public/iconos/Eventos.jpg";

export default function CalendarioBoton() {
  const [showCalendario, setShowCalendario] = useState(false); // define state variable para controlar el popup

  const handleCalendarioClick = () => {
    setShowCalendario(!showCalendario); // al hacer click el estado de la variable pasa a true
  };

  return (
    <>
      <div>
        <button nombreTarjeta="Calendario" onClick={handleCalendarioClick}>
          <img src={Eventos} alt="eventos" />
        </button>
      </div>
      {showCalendario && (
        <CalendarioPopUp onClick={handleCalendarioClick}></CalendarioPopUp>
      )}
    </>
  );
}
