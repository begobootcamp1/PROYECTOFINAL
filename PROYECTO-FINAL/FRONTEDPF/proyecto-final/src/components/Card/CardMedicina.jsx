import "./CardContacto.css";

export default function CardContacto({ datos }) {
  console.log(datos);
  return datos.map((datos) => (
    <>
      {/* recibimos la datos y con ella ponemos una card pero no ponemos
          datos sino que lo desestructuro en sus propiedades */}
      <div className="Wrap" key={datos.id} />
      <img
        className="imagen"
        src={`http://localhost:3000/${datos.fotoContacto}`}
        max-width="400px"
        margin="0"
        alt={datos.nombre}
      />
      {/*//van
          apareciendo las propiedades que tiene el objeto */}
      <br />
      <div className="titulo">
        <h2>{datos.nombre}</h2>
      </div>
      <div className="comentarios">
        <div className="tituloComentarios">Quién es...</div>
        <div className="comentario">
          <h1>{datos.contactoComentario}</h1>
          <h1>{datos.telefono}</h1>
        </div>
      </div>
    </>
  ));
}
