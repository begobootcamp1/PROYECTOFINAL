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
// el componente boton recive la propiedad nombreTarjeta con el valor Contacto. El evento ocClick se
//maneja con la función handleContactoClick function, que pone el estado de la variable showContacto state
// a true. El componente ContactoPopUp es importado y se renderiza usando el estado de la variable
//showContacto, que recibe una propiedad onClose, que maneja el evento de cierre deteando el estado
//de la variable showContacto a false.

// export default function EmergenciaBoton() {

//   return <button id="enviar-mensaje">Enviar mensaje</button>;
// }
