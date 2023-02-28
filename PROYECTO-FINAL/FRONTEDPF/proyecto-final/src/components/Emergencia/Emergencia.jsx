import "../Card/Card.css";
import EmergenciaBoton from "../EmergenciaBoton/EmergenciaBoton";

export default function Emergencia({ contacto }) {
  return (
    <>
      {contacto ? (
        <div key={contacto}>
          <div className="Wrap" key={id} />
          <img
            className="imagen"
            src={contacto.fotoContacto}
            max-width="400px"
            margin="0"
          />
          <br />
          <div className="titulo">
            <span>{contacto.nombre}</span>
            <span>{contacto.telefono}</span>
            <span>{contacto.parentesco}</span>
          </div>
          <div className="comentarios">
            <div className="tituloComentarios">MI HIJO</div>
            <div className="comentario">
              <span>Avisar en caso de emergencia</span>
            </div>
          </div>
        </div>
      ) : (
        <p>No hay contacto</p>
      )}
      <EmergenciaBoton />
    </>
  );
}
