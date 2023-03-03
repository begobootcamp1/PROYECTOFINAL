import "./CardContacto.css";

export default function CardContacto({ datos }) {
  console.log(datos);
  return datos.map((datos) => (
    <>
      {/* recibimos la datos y con ella ponemos una card pero no ponemos
          datos sino que lo desestructuro en sus propiedades */}
      <div className="Wrap" key={datos.id} display="flex" />
      <div className="imagen">
        <img
          className="imagen"
          src={`http://localhost:3000/${datos.fotoContacto}`}
          alt={datos.nombre}
        />
      </div>

      <div className="container">
        <div className="titulo">
          <h3>{datos.nombre}</h3>
        </div>
        <div className="comentarios">
          <div className="tituloComentarios">Quién es...</div>
          <div className="comentario">
            <p>{datos.contactoComentario}</p>
            <p>{datos.telefono}</p>
          </div>
        </div>
      </div>
    </>
  ));
}
