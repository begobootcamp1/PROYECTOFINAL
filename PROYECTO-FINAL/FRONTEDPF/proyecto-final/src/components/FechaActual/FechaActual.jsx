import "./FechaActual.css";
import moment from "moment";
import "moment/locale/es"; // importa el idioma español para moment

export default function FechaActual() {
  const fecha = moment().locale("es").format("DD [de] MMMM [de] YYYY"); // obtiene la fecha actual en formato 'LL' (por ejemplo, "27 de febrero de 2023")
  return <div className="fecha-actual">{fecha}</div>;
}
FechaActual();
