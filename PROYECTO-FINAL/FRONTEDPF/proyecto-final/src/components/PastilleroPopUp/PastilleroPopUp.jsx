import React from "react";
import "./PastilleroPopUp.css";
import CardMedicina from "../Card/CardMedicina";
import { useEffect, useState } from "react";

export default function PastilleroPopup(props) {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/medicina/medicina");
      let jsonData = await response.json();
      setDatos(jsonData);
    };
    fetchData();
  }, []);
  return (
    <div className="popup">
      <div className="popup-content">
        <div>{datos ? <CardMedicina datos={datos} /> : <p>Cargando...</p>}</div>
        <button className="close-button" onClick={props.onClick}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
