import "./CardMedicina.css";

export default function CardMedicina({ datos }) {
  console.log(datos);
  return datos.map((datos) => (
    <>
      <div className="Wrap" key={datos.id} display="flex">
        <div className="imagen">
          <img
            src={`http://localhost:3000/${datos.fotoMedicina}`}
            alt={datos.nombreMedicina}
          />
        </div>

        <div className="container">
          <div className="titulo">
            <h3>{datos.nombreMedicina}</h3>
          </div>
          <div className="prescripcion">
            <div className="tituloPrescrpcion">Para qué es...</div>
            <div className="comentario">
              <p>{datos.indicacion}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  ));
}
