import "./CardContacto.css";
import { useState, useEffect } from "react";

export default function CardAdministrador() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/contacto/contactos");
      let jsonData = await response.json();
      setDatos(jsonData);
      console.log(datos);
    };
    fetchData();
  }, []);
  return <div>{datos ? <p>{`${datos[2].nombre}`}</p> : <p>cargando</p>}</div>;
}
