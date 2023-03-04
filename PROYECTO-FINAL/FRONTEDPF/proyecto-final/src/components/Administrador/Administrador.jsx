import React from "react";
import "./Administrador.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Administrador(props) {
  const [usuario, setUsuario] = useState([]);
  const [nuevoContacto, setNuevoContacto] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/contacto/contactos");
      let jsonData = await response.json();
      setUsuario(jsonData);
    };
    fetchData();
  }, []);
  function salir() {
    navigate("/");
  }

  async function agregar(e) {
    e.preventDefault();
    const añadirContacto = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoContacto),
    };
    //coger la url del post

    const response = await fetch(URL, añadirContacto);
  }

  //FUNCION ELIMINAR, CON EL URL DEL DELETE

  return (
    <>
      <div className="tabla-administrador">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Parentesco</th>
              <th>Fecha Nacimiento</th>
              <th>Foto</th>
              <th>Comentario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {usuario.map((contacto) => (
                <>
                  <td>{contacto.nombre}</td>
                  <td>{contacto.telefono}</td>
                  <td>{contacto.parentesco}</td>
                  <td>{contacto.fechaNacimiento}</td>
                  <td>{contacto.fotoContacto}</td>
                  <td>{contacto.contactoComentario}</td>
                  <td>
                    <button className="agregar">Agregar</button>
                    <button className="editar">Editar</button>
                  </td>
                </>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={() => salir()}>Salir</button>
    </>
  );
}
