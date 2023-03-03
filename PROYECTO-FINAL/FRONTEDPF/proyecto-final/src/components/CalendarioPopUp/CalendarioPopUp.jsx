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
    };
    fetchData();
  }, []);

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={props.onClick}>
          Cerrar
        </button>
        {datos ? (
          datos.map((dato) => <p>{dato.nombreEvento}</p>)
        ) : (
          <p>No hay eventos hoy</p>
        )}
      </div>
    </div>
  );
}
