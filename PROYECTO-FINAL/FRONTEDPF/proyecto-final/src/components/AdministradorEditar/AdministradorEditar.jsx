import { useState } from "react";
import { useFormik } from "formik";
import "./AdministradorEditar.css";

export default function AdministradorEditar({
  setUsuario,
  setIdUsuario,
  contacto,
}) {
  const [editarUsuario, setEditarUsuario] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    telefono: "",
    parentesco: "",
    fechaNacimiento: "",
    // fotoContacto: "",
    contactoComentario: "",
  });

  async function onSubmit(values, actions) {
    let formData = new FormData();
    // formData.append("fotoContacto", values.fotoContacto);
    formData.append("nombre", values.nombre);
    formData.append("parentesco", values.parentesco);
    formData.append("fechaNacimiento", values.fechaNacimiento);
    formData.append("contactoComentario", values.contactoComentario);
    formData.append("telefono", values.telefono);
    try {
      const response = await fetch(
        `http://localhost:3000/contacto/update/${contacto.id}`,
        {
          method: "PATCH",

          body: formData,
        }
      );
      const newUsuarios = await response.json();
      setUsuario(newUsuarios);

      if (response.status === 200) {
        alert("Usuario creado correctamente");
      }
      setIdUsuario(0);
    } catch (e) {
      console.log(e);
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
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
      fechaNacimiento: "",
      parentesco: "",
      // fotoContacto: "",
      contactoComentario: "",
    },

    onSubmit,
  });

  return (
    <>
      <div className="editarUsuario">
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
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
          <label>Parentesco</label>
          <input
            type="text"
            name="parentesco"
            onChange={handleChange}
            value={values.parentesco}
            onBlur={handleBlur}
          />
          {/* <label>Foto contacto</label>
          <input
            type="file"
            name="fotoContacto"
            onChange={(e) => setFieldValue("fotoContacto", e.target.files[0])}
            value={undefined}
            onBlur={handleBlur}
          /> */}
          <label>Contacto comentario</label>
          <input
            type="text"
            name="contactoComentario"
            onChange={handleChange}
            value={values.contactoComentario}
            onBlur={handleBlur}
          />
          <button className="aceptarCambios" type="submit" onClick={onSubmit}>
            Aceptar cambios
          </button>
        </form>
      </div>
    </>
  );
}
