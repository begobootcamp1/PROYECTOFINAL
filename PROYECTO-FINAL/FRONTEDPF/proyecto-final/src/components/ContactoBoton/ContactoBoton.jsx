import ContactoPopUp from "../ContactoPopUp/ContactoPopUp";
import { useState } from "react";
import Contactos from "../../../public/iconos/Contactos.jpg";

export default function ContactoBoton() {
  const [showContacto, setShowContacto] = useState(false); // define state variable para controlar el popup

  const handleContactoClick = () => {
    setShowContacto(!showContacto); // al hacer click el estado de la variable pasa a true
  };

  return (
    <>
      <div>
        <button nombreTarjeta="Contacto" onClick={handleContactoClick}>
          <img src={Contactos} alt="contactos" />
        </button>
      </div>
      {showContacto && (
        <ContactoPopUp onClick={handleContactoClick}></ContactoPopUp>
      )}
    </>
  );
}
