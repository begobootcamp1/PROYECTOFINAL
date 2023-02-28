import Boton from "../Boton/Boton";
import ContactoPopUp from "../Contacto/Contacto";
import { useState } from "react";

export default function ContactoBoton() {
  const [showContacto, setShowContacto] = useState(false); // define state variable para controlar el popup

  const handleContactoClick = () => {
    setShowContacto(true); // al hacer click el estado de la variable pasa a true
  };

  const handleContactoClose = () => {
    setShowContacto(false); // cuando cerramos el popup el estado de la variable pasa a falso
  };
  return (
    <>
      <Boton nombreTarjeta="Contacto" onClick={handleContactoClick} />
      {/* pasa el nombre de la tarjeta como una propiedad del componente Boton y maneja el evento click */}
      {showContacto && <ContactoPopUp onClose={handleContactoClose} />}
      {/* se ve el componente CalendarioPopup cuando el estado de la variable es true */}
      {/* enviarle al botón un parámetro con el nombre de la tarjeta, en este caso el calen
      dario. El botón recibe ese parámetro y debería llamar al popup de la tarjeta que corresponde con ese parámetro 
      El popup sería el calendario y un botón para cerrar*/}
      <h2>Contacto</h2>
    </>
  );
}
// el componente boton recive la propiedad nombreTarjeta con el valor Contacto. El evento ocClick se
//maneja con la función handleContactoClick function, que pone el estado de la variable showContacto state
// a true. El componente ContactoPopUp es importado y se renderiza usando el estado de la variable
//showContacto, que recibe una propiedad onClose, que maneja el evento de cierre deteando el estado
//de la variable showContacto a false.
