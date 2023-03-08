import React, { useState } from "react";
import "./CalendarioPopUp.css";
import { useEffect } from "react";

export default function CalendarioPopup(props) {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/evento/evento`);
      let jsonData = await response.json();
      setDatos(jsonData);
      console.log(datos);
    };
    fetchData();
  }, []);

  return (
    <div className="calendarioPopup">
      <div className="popup-content">
        <button className="close-button" onClick={props.onClick}>
          Cerrar
        </button>
        {datos ? (
          datos.map((dato) => <h1>{dato.nombreEvento}</h1>)
        ) : (
          <h1>No hay eventos hoy</h1>
        )}
      </div>
    </div>
  );
}
