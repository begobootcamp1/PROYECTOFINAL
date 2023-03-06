import React from "react";
import "./Administrador.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import AdministradorEditar from "../AdministradorEditar/AdministradorEditar";

export default function Administrador(props) {
  const [idUsuario, setIdUsuario] = useState(0);
  const [usuario, setUsuario] = useState([]);
  const [nuevoContacto, setNuevoContacto] = useState();
  const navigate = useNavigate();
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    telefono: "",
    parentesco: "",
    fechaNacimiento: "",
    fotoContacto: "",
    contactoComentario: "",
  });
  const [medicina, setMedicina] = useState([]);
  const [nuevaMedicina, setNuevaMedicina] = useState();
  const [nuevoMedicamento, setNuevoMedicamento] = useState({
    indicacion: "",
    nombreMedicina: "",
    fotoMedicina: "",
  });

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

  async function onSubmit(values) {
    let formData = new FormData();
    formData.append("fotoContacto", values.fotoContacto);
    formData.append("nombre", values.nombre);
    formData.append("parentesco", values.parentesco);
    formData.append("fechaNacimiento", values.fechaNacimiento);
    formData.append("contactoComentario", values.contactoComentario);
    formData.append("telefono", values.telefono);
    try {
      const response = await fetch(`http://localhost:3000/contacto`, {
        method: "POST",
        body: formData,
      });
      const newUsuarios = await response.json();
      setUsuario(newUsuarios);

      if (response.status === 200) {
        alert("Usuario creado correctamente");
      }
    } catch (e) {
      console.log(e);
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  }
  async function deleteUser(id, e) {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/contacto/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    let jsonData = await response.json();
    setUsuario(jsonData);
  }
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  } = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      parentesco: "",
      fechaNacimiento: "",
      fotoContacto: "",
      contactoComentario: "",
    },

    onSubmit,
  });
  function administradorMedicina() {
    function handleMedicina(e) {
      const añadirMedicina = {
        ...nuevaMedicina,
        [e.target.name]: e.target.value,
      };
      setNuevaMedicina(añadirMedicina);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/medicina/medicina");
      let jsonData = await response.json();
      setMedicina(jsonData);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2> FORMULARIO CONTACTO </h2>
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
            {usuario.map((contacto) => (
              <>
                <tr>
                  <td>{contacto.nombre}</td>
                  <td>{contacto.telefono}</td>
                  <td>{contacto.parentesco}</td>
                  <td>{contacto.fechaNacimiento.split("T")[0]}</td>
                  <td>{contacto.fotoContacto}</td>
                  <td>{contacto.contactoComentario}</td>
                  <td>
                    <button
                      onClick={() => setIdUsuario(contacto.id)}
                      className="editar"
                    >
                      Editar
                    </button>
                    <button
                      onClick={(e) => deleteUser(contacto.id, e)}
                      className="borrar"
                    >
                      Borrar
                    </button>
                  </td>
                </tr>

                {idUsuario == contacto.id ? (
                  <AdministradorEditar
                    contacto={contacto}
                    setUsuario={setUsuario}
                    setIdUsuario={setIdUsuario}
                  />
                ) : (
                  <div></div>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <div>
        <container>
          <form onSubmit={handleSubmit}>
            <label>nombre</label>
            <input
              type="text"
              name="nombre"
              onChange={handleChange}
              value={values.nombre}
              onBlur={handleBlur}
            />
            <label>telefono</label>
            <input
              type="number"
              name="telefono"
              onChange={handleChange}
              value={values.telefono}
              onBlur={handleBlur}
            />

            <label>parentesco</label>
            <input
              type="text"
              name="parentesco"
              onChange={handleChange}
              value={values.parentesco}
              onBlur={handleBlur}
            />

            <label>fechaNacimiento</label>
            <input
              type="text"
              name="fechaNacimiento"
              onChange={handleChange}
              value={values.fechaNacimiento}
              onBlur={handleBlur}
            />

            <label>fotoContacto</label>
            <input
              type="file"
              accept="image/*"
              name="fotoContacto"
              onChange={(e) => setFieldValue("fotoContacto", e.target.files[0])}
              value={undefined}
              onBlur={handleBlur}
            />

            <label>contactoComentario</label>
            <input
              type="text"
              name="contactoComentario"
              onChange={handleChange}
              value={values.contactoComentario}
              onBlur={handleBlur}
            />
            <br />
            <button disabled={isSubmitting} type="submit" className="agregar">
              Agregar Contacto
            </button>
          </form>
        </container>
      </div>
      <br />
      <h2> FORMULARIO MEDICINA </h2>

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
            {medicina.map((medicina) => (
              <tr>
                <td>{medicina.indicacion}</td>
                <td>{medicina.fotoMedicina}</td>
                <td>{medicina.nombreMedicina}</td>
                <td>
                  <button className="borrar">Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <div>
        <container>
          <form onSubmit={handleSubmit}>
            <label>Indicación</label>
            <input
              type="text"
              name="indicacion"
              // onChange={(e) => handleMedicina(e)}
              // value={nuevoMedicamento.indicacion}
            />

            <label>fotoMedicina</label>
            <input
              type="file"
              name="fotoMedicina"
              // onChange={(e) => handleMedicina(e)}
              // value={nuevoMedicamento.fotoMedicina}
            />

            <label>nombreMedicina</label>
            <input
              type="text"
              name="nombreMedicina"
              // onChange={(e) => handleMedicina(e)}
              // value={nuevoMedicamento.nombreMedicina}
            />
            <br />
            <button type="submit" className="agregar">
              Agregar Medicina
            </button>
          </form>
        </container>
      </div>
      <br />

      <h2> FORMULARIO IMAGEN </h2>

      <div className="tabla-imagen">
        <button type="submit" className="agregar">
          Agregar Imagen
        </button>
      </div>
      <div>
        <button className="salir" onClick={() => salir()}>
          Salir
        </button>
      </div>
    </>
  );
}
