import React from "react";
import "./ContactoPopUp.css";
import CardContacto from "../Card/CardContacto";
import { useEffect, useState } from "react";

export default function ContactoPopup(props) {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/contacto/contactos");
      let jsonData = await response.json();
      setDatos(jsonData);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="popup">
        <div className="popup-content">
          <div>
            {datos ? <CardContacto datos={datos} /> : <p>Cargando...</p>}
          </div>
          <div>
            <button className="close-button" onClick={props.onClick}>
              Cerrar
            </button>
          </div>
          {/* <h3>Pastillero</h3> */}
        </div>
      </div>
    </>
  );
}
