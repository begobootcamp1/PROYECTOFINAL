import "./BarraLateral.css";
import Boton from "../Boton/Boton";
import Reloj from "../Reloj/Reloj";
import Saludo from "../Reloj/Saludo";

export default function BarraLateral() {
  return (
    <div className="barraLateral">
      <div>
        <Reloj />
      </div>
      <div>
        <Saludo />
      </div>
      <div>
        <Boton />
      </div>
    </div>
  );
}
