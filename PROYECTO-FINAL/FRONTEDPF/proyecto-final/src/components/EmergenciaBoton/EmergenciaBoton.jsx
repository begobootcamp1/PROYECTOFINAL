import EmergenciaPopUp from "../EmergenciaPopUp/EmergenciaPopUp";
import { useEffect, useState } from "react";
import emergencia from "../../../public/iconos/emergencia.jpg";

export default function EmergenciaBoton() {
  const [showContacto, setShowContacto] = useState(false); // define state variable para controlar el popup

  const handleContactoClick = () => {
    setShowContacto(!showContacto); // al hacer click el estado de la variable pasa a true
  };

  return (
    <>
      <div>
        <button nombreTarjeta="Contacto" onClick={handleContactoClick}>
          <img src={emergencia} alt="emergencia" />
        </button>
      </div>
      {showContacto && (
        <EmergenciaPopUp onClick={handleContactoClick}></EmergenciaPopUp>
      )}
    </>
  );
}
// el componente boton recive la propiedad nombreTarjeta con el valor Contacto. El evento ocClick se
//maneja con la función handleContactoClick function, que pone el estado de la variable showContacto state
// a true. El componente ContactoPopUp es importado y se renderiza usando el estado de la variable
//showContacto, que recibe una propiedad onClose, que maneja el evento de cierre deteando el estado
//de la variable showContacto a false.

// export default function EmergenciaBoton() {
//   useEffect(() => {
//     const botonEmergencia = document.getElementById("enviar-mensaje"); //para ejecutarlo después de renderizar el componente
//     botonEmergencia.addEventListener("click", () => {
//       const mensaje = "Hola, necesito ayuda.";
//       const destinatario = "suarez.mbego@gmail.es";
//       const asunto = "Mensaje de mi madre";
//       const mailtoLink = `mailto:${destinatario}?subject=${asunto}&body=${mensaje}`;
//       window.location.href = mailtoLink; //propiedad que especifica la URL de la página actual. Al asignarle un valor, se produce una redirección de la página actual a la URL especificada(un enlace "mailto"), que abre el cliente de correo electrónico predeterminado del usuario y prellenar un nuevo correo electrónico con el destinatario, asunto y cuerpo especificados en la URL.
//     });
//   }, []);

//   return <button id="enviar-mensaje">Enviar mensaje</button>;
// }
