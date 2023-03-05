import React from "react";
import "./Administrador.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Administrador(props) {
    function administradorContacto(){
  const [usuario, setUsuario] = useState([]);
  const [nuevoContacto, setNuevoContacto] = useState();
  const navigate = useNavigate();
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    telefono: "",
    parentesco: "",
    fechaNacimiento: "",
    foto: "",
    comentario: "",
  });

  function handleUsuario(e) {
    const añadirUsuario = { ...nuevoUsuario, [e.target.name]: e.target.value };
    setNuevoUsuario(añadirUsuario);
  }
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
    setNuevoUsuario({
      nombre: "",
      telefono: "",
      parentesco: "",
      fechaNacimiento: "",
      foto: "",
      comentario: "",
    });
  }

  //FUNCION ELIMINAR Y FUNCIÓN EDITAR, CON EL URL DEL DELETE

  return (
    <>      <div className="tabla-administrador">
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
                    <button className="editar">Editar</button>
                    <button className="borrar">Borrar</button>
                  </td>
                    </tr>
          </tbody>
        </table>
              )}
      </div>


      
      <h2> FORMULARIO CONTACTOS </h2>
      <>
        <div>
          <form onSubmit={(e) => agregar(e)}>
            <label>nombre</label>
            <input
              type="text"
              name="nombre"
              onChange={handleUsuario}
              value={nuevoUsuario.nombre}
            />
            <label>telefono</label>
            <input
              type="number"
              name="telefono"
              onChange={handleUsuario}
              value={nuevoUsuario.telefono}
            />

            <label>parentesco</label>
            <input
              type="text"
              name="parentesco"
              onChange={handleUsuario}
              value={nuevoUsuario.parentesco}
            />

            <label>fechaNacimiento</label>
            <input
              type="text"
              name="fechaNacimiento"
              onChange={handleUsuario}
              value={nuevoUsuario.fechaNacimiento}
            />

            <label>fotoContacto</label>
            <input
              type="file"
              name="fotoContacto"
              onChange={handleUsuario}
              value={nuevoUsuario.fotoContacto}
            />

            <label>contactoComentario</label>
            <input
              type="text"
              name="contactoComentario"
              onChange={handleUsuario}
              value={nuevoUsuario.contactoComentario}
            />

            <button type="submit" className="agregar">
              Agregar Contacto
            </button>
          </form>
        </div>
      </>
      
AdministradorContacto();
      




function administradorMedicina(){
    function administradorMedicina(){
  const [medicina, setMedicina] = useState([]);
  const [nuevaMedicina, setNuevaMedicina] = useState();
  const navigate = useNavigate();
  const [nuevoMedicamento, setNuevoMedicamento] = useState({
    indicacion: "",
    nombreMedicina: "",
    fotoMedicina: "",
  });

  function handleMedicina(e) {
    const añadirMedicina = { ...nuevaMedicina, [e.target.name]: e.target.value };
    setNuevaMedicina(añadirMedicina);
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/medicina/medicina");
      let jsonData = await response.json();
      setMedicina(jsonData);
    };
    fetchData();
  }, []);
  function salir() {
    navigate("/");
  }

  async function agregar(e) {
    e.preventDefault();
    const añadirMedicina = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoMedicamento),
    };
    //coger la url del post

    const response = await fetch(URL, añadirMedicina);
    setNuevoMedicamento({
      indicacion: "",
      fotoMedicna: "",
      nombreMedicina: "",
          });
  }

  //FUNCION ELIMINAR Y FUNCIÓN EDITAR, CON EL URL DEL DELETE

  return (
    <>
      <div className="tabla-medicina">
        <table>
          <thead>
            <tr>
              <th>Indicación</th>
              <th>Foto</th>
              <th>NombreMedicina</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {medicina.map((medicina) => (
                <>
                  <td>{medicina.indicacion}</td>
                  <td>{medicina.fotoMedicina}</td>
                  <td>{medicina.nombreMedicina}</td>
                  <td>
                    
                    <button className="borrar">Borrar</button>
                  </td>
                </>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <h2> FORMULARIO MEDICINAS </h2>
      <>
        <div>
          <form onSubmit={(e) => agregar(e)}>
            <label>Indicación</label>
            <input
              type="text"
              name="indicacion"
              onChange={handleMedicina}
              value={nuevoMedicamento.indicacion}
            />
            

            <label>fotoMedicina</label>
            <input
              type="file"
              name="fotoMedicina"
              onChange={handleMedicina}
              value={nuevoMedicamento.fotoMedicina}
            />

            <label>nombreMedicina</label>
            <input
              type="text"
              name="nombreMedicina"
              onChange={handleMedicina}
              value={nuevoMedicamento.nombreMedicina}
            />

            <button type="submit" className="agregar">
              Agregar Medicina
            </button>
          </form>
        </div>
      </>
      
administradorMedicina();
      





      <div>
        <button onClick={() => salir()}>Salir</button>
      </div>
    </>
  );
}

}




// <h2> FORMULARIO IMÁGENES </h2>
// <div>
//   <button type="submit" className="agregar">
//     Agregar imagen
//   </button>
// </div>
// <br />