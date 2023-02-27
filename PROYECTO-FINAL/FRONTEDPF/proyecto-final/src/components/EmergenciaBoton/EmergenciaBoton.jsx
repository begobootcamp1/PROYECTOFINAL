import EmergenciaPopUp from "../EmergenciaPopUp/EmergenciaPopUp";
import { useEffect } from "react";

export default function EmergenciaBoton() {
  useEffect(() => {
    const botonEmergencia = document.getElementById("enviar-mensaje"); //para ejecutarlo después de renderizar el componente
    botonEmergencia.addEventListener("click", () => {
      const mensaje = "Hola, necesito ayuda.";
      const destinatario = "suarez.mbego@gmail.es";
      const asunto = "Mensaje de mi madre";
      const mailtoLink = `mailto:${destinatario}?subject=${asunto}&body=${mensaje}`;
      window.location.href = mailtoLink; //propiedad que especifica la URL de la página actual. Al asignarle un valor, se produce una redirección de la página actual a la URL especificada(un enlace "mailto"), que abre el cliente de correo electrónico predeterminado del usuario y prellenar un nuevo correo electrónico con el destinatario, asunto y cuerpo especificados en la URL.
    });
  }, []);

  return <EmergenciaPopUp />;
  // <button className="enviar-mensaje">Enviar mensaje</button>;
}
