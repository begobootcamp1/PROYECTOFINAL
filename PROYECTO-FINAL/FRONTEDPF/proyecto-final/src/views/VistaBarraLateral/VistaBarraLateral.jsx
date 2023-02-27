import React, { useEffect, useState } from "react";
import BarraLateral from "../../components/BarraLateral/BarraLateral";

export default function VistaBarraLateral() {
  const [contacto, setContacto] = useState({});

  useEffect(() => {
    async function fetchContacto() {
      const response = await fetch("http://localhost:3000/contacto");
      const datosContacto = await response.json();
      setContacto(datosContacto);
    }

    fetchContacto();
  }, []);

  return (
    <div>
      <BarraLateral Reloj={Reloj} datosContacto={contacto} />
    </div>
  );
}
