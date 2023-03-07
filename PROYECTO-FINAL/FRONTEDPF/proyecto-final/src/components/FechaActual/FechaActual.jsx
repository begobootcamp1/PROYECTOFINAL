import "./FechaActual.css";
import moment from "moment";
import "moment/locale/es";

export default function FechaActual() {
  const fecha = moment().locale("es").format("DD [de] MMMM [de] YYYY");
  return <div className="fecha-actual">{fecha}</div>;
}
FechaActual();
