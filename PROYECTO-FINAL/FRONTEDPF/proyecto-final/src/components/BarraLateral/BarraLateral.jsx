import "./BarraLateral.css";
import Reloj from "../Reloj/Reloj";
import Saludo from "../Saludo/Saludo";
import CardAdministrador from "../Card/CardAdministrador";
import FechaActual from "../FechaActual/FechaActual";

export default function BarraLateral() {
  return (
    <div className="barraLateral">
      <div className="Reloj">
        <Reloj />
      </div>
      <div className="FechaActual">
        <FechaActual />
      </div>
      <div className="Saludo">
        <Saludo />
      </div>
      <div className="CardAdministrador">
        <CardAdministrador />
      </div>
    </div>
  );
}
