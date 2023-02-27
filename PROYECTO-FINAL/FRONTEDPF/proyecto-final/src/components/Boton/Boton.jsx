import { useState } from "react";
import "./Boton.css";

const Boton = (props) => {
  return (
    <button className="boton" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default function PlantillaBoton() {
  const [pulsado, setPulsado] = useState(false);
  return (
    <>
      <Boton onClick={() => setPulsado(!pulsado)}>
        La función de este botón es....
      </Boton>
      {pulsado ? <Boton /> : <h1>Adios</h1>}
    </>
  );
}
