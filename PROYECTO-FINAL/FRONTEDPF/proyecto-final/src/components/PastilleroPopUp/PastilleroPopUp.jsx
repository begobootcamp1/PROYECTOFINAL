import React from "react";
import "./PastilleroPopUp.css";
import CardMedicina from "../Card/CardMedicina";
import { useEffect, useState } from "react";
import moment from "moment";

export default function PastilleroPopup(props) {
  const [datos, setDatos] = useState([]);
  const now = moment();
  const dia = now.format("dddd");
  const hora = now.format("HH:mm:ss");
  let turno = 0;

  if (hora > "06:00:00" && hora < "10:00:00") {
    turno = 1;
  } else if (hora >= "10:00:00" && hora < "17:00:00") {
    turno = 2;
  } else if (hora >= "20:00:00" && hora < "23:50:00") {
    turno = 3;
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/medicina/medicina/${dia}/${turno}`
      );
      let jsonData = await response.json();
      setDatos(jsonData);
      console.log(hora);
    };

    fetchData();
  }, []);
  return (
    <div className="popup">
      <div className="popup-content">
        {
          (turno = 0 ? (
            <p>NO HAY NINGUNA MEDICINA QUE TOMAR</p>
          ) : (
            <div>
              {datos ? <CardMedicina datos={datos} /> : <p>Cargando...</p>}
            </div>
          ))
        }

        <button className="close-button" onClick={props.onClick}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
