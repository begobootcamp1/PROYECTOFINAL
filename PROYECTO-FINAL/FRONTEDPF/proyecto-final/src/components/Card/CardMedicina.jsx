import "./CardMedicina.css";

export default function CardMedicina({ datos }) {
  console.log(datos);
  return datos.map((datos) => (
    <>
      {/* recibimos la datos y con ella ponemos una card pero no ponemos
          datos sino que lo desestructuro en sus propiedades */}
      <div className="Wrap" key={datos.id} />
      <img
        className="imagen"
        src={`http://localhost:3000/${datos.fotoMedicina}`}
        max-width="400px"
        margin="0"
        alt={datos.nombreMedicina}
      />
      {/*//van
          apareciendo las propiedades que tiene el objeto */}
      <br />
      <div className="titulo">
        <h2>{datos.nombreMedicina}</h2>
      </div>
      <div className="prescripción">
        <div className="tituloComentarios">Para qué es...</div>
        <div className="comentario">
          <h1>{datos.indicacion}</h1>
        </div>
      </div>
    </>
  ));
}
