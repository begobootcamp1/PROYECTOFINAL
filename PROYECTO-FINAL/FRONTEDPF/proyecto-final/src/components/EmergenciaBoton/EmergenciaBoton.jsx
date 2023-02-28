import EmergenciaPopUp from "../EmergenciaPopUp/EmergenciaPopUp";
// import { useEffect } from "react";
import Boton from "../Boton/Boton";
import { useEffect, useState } from "react";
import emergencia from "../../../public/iconos/emergencia.jpg";

export default function EmergenciaBoton() {
  const [showContacto, setShowContacto] = useState(false); // define state variable para controlar el popup

  const handleContactoClick = () => {
    setShowContacto(!showContacto); // al hacer click el estado de la variable pasa a true
  };

  // const handleContactoClose = () => {
  //   setShowContacto(false); // cuando cerramos el popup el estado de la variable pasa a falso
  // };
  return (
    <>
      <div>
        <button nombreTarjeta="Contacto" onClick={handleContactoClick}>
          <img src={emergencia} alt="emergencia" />
        </button>
      </div>
      {/* pasa el nombre de la tarjeta como una propiedad del componente Boton y maneja el evento click */}
      {showContacto && (
        <EmergenciaPopUp onClick={handleContactoClick}></EmergenciaPopUp>
      )}
      {/* se ve el componente CalendarioPopup cuando el estado de la variable es true */}
      {/* enviarle al botón un parámetro con el nombre de la tarjeta, en este caso el calen
      dario. El botón recibe ese parámetro y debería llamar al popup de la tarjeta que corresponde con ese parámetro 
      El popup sería el calendario y un botón para cerrar*/}

      {/* <EmergenciaPopUp /> */}
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
