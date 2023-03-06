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
  let turnoMedicina = 0;

  useEffect(() => {
    const fetchData = async () => {
      if (hora > "06:00:00" && hora < "10:00:00") {
        turnoMedicina = 1;
      } else if (hora >= "10:00:00" && hora < "20:00:00") {
        turnoMedicina = 2;
      } else if (hora >= "20:00:00" && hora < "23:50:00") {
        turnoMedicina = 3;
      }
      const response = await fetch(
        `http://localhost:3000/medicina/medicina/${dia}/${turnoMedicina}`
      );
      let jsonData = await response.json();
      setDatos(jsonData);
      console.log(datos, "pastillero");
    };

    fetchData();
  }, []);
  return (
    <div className="popup">
      <div className="popup-content">
        {datos?.length <= 0 ? (
          <h1>No hay ninguna medicina que tomar</h1>
        ) : (
          <div>
            <CardMedicina datos={datos} />
          </div>
        )}

        <button className="close-button" onClick={props.onClick}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
