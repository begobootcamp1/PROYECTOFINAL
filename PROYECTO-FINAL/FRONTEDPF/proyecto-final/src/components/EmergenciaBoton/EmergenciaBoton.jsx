import EmergenciaPopUp from "../EmergenciaPopUp/EmergenciaPopUp";
import { useEffect, useState } from "react";
import emergencia from "../../../public/iconos/emergencia.jpg";

export default function EmergenciaBoton() {
  const handleContactoClick = () => {
    const mensaje = "Hola, necesito ayuda.";
    const destinatario = "suarez.mbego@gmail.es";
    const asunto = "Mensaje de mi madre";
    const mailtoLink = `mailto:${destinatario}?subject=${asunto}&body=${mensaje}`;
    window.location.href = mailtoLink;
  };
  return (
    <>
      <div>
        <button nombreTarjeta="Contacto" onClick={handleContactoClick}>
          <img src={emergencia} alt="emergencia" />
        </button>
      </div>
    </>
  );
}
