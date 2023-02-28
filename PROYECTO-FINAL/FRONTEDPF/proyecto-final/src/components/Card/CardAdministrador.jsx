import "./Card.css";

export default function CardAdministrador({ contacto }) {
  return (
    <div key={contacto}>
      <>
        {/* recibimos la datos y con ella ponemos una card pero no ponemos
          datos sino que lo desestructuro en sus propiedades */}
        <div className="Wrap" />
        <img
          className="imagen"
          src={contacto.img}
          max-width="400px"
          margin="0"
        />
        {/*//van
          apareciendo las propiedades que tiene el objeto */}
        <br />
        <div className="titulo">
          <span>{contacto.nombre}</span>
          <span>{contacto.telefono}</span>
        </div>
        <div className="comentarios">
          <div className="tituloComentarios">Comentario</div>
          <div className="comentario">
            <span>{contacto.comentario}</span>
          </div>
        </div>
      </>
      ;
    </div>
  );
}
