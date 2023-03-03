import "./BarraLateral.css";
import Reloj from "../Reloj/Reloj";
import Saludo from "../Saludo/Saludo";
import FechaActual from "../FechaActual/FechaActual";
import CardContacto from "../Card/CardContacto";
import { useEffect, useState } from "react";

export default function BarraLateral() {
  const [datos, setDatos] = useState([]);
  function emergencia() {
    const mensaje = "Hola, necesito ayuda.";
    const destinatario = "suarez.mbego@gmail.es";
    const asunto = "Mensaje de mi madre";
    const mailtoLink = `mailto:${destinatario}?subject=${asunto}&body=${mensaje}`;
    window.location.href = mailtoLink;
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:3000/contacto/contactos/id"
      );
      let jsonData = await response.json();
      setDatos(jsonData);
      console.log(datos);
    };
    fetchData();
  }, []);

  return (
    <div className="barraLateral">
      <div className="Reloj">
        <Reloj />
      </div>
      <div className="FechaActual">
        <FechaActual />
      </div>
      <div className="Saludo">
        <Saludo />
      </div>
      <div className="CardAdministrador">
        <CardContacto datos={datos} />
        <button class="botonLlamar" onClick={() => emergencia()}>
          Llamar
        </button>
      </div>
    </div>
  );
}
