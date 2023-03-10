import PastilleroPopUp from "../PastilleroPopUp/PastilleroPopUp";
import { useState } from "react";
import Medicina from "../../../public/iconos/Medicina.jpg";

export default function PastilleroBoton() {
  const [showPastillero, setShowPastillero] = useState(false);

  const handlePastilleroClick = () => {
    setShowPastillero(!showPastillero); // al hacer click el estado de la variable pasa a true
  };
  return (
    <>
      <div>
        <button nombreTarjeta="Pastillero" onClick={handlePastilleroClick}>
          <img src={Medicina} alt="medicina" />
        </button>
      </div>
      {showPastillero && (
        <PastilleroPopUp onClick={handlePastilleroClick}></PastilleroPopUp>
      )}
    </>
  );
}
