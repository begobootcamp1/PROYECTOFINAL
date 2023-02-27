import "./Card.css";

export default function Card({ datos }) {
  return (
    <div key={datos}>
      {datos.map((datos) => (
        <>
          {/* recibimos la datos y con ella ponemos una card pero no ponemos
          datos sino que lo desestructuro en sus propiedades */}
          <div className="Wrap" key={id} />
          <img
            className="imagen"
            src={datos.img}
            max-width="400px"
            margin="0"
          />
          {/*//van
          apareciendo las propiedades que tiene el objeto */}
          <br />
          <div className="titulo">
            <span>{datos.nombre}</span>
          </div>
          <div className="comentarios">
            <div className="tituloComentarios">Comentario</div>
            <div className="comentario">
              <span>{datos.comentario}</span>
            </div>
          </div>
        </>
      ))}
      ;
    </div>
  );
}
