import "./Botonera.css";
import Boton from "../Boton/Boton";
import CalendarioBoton from "../CalendarioBoton/CalendarioBoton";
import EmergenciaBoton from "../EmergenciaBoton/EmergenciaBoton";
import PastilleroBoton from "../PastilleroBoton/PastilleroBoton";
import MusicaBoton from "../MusicaBoton/MusicaBoton";

export default function Botonera() {
  return (
    <div className="botonera">
      <div>
        <EmergenciaBoton />
      </div>
      <div>
        <PastilleroBoton />
      </div>
      <div>
        <Boton />
        Album
      </div>
      <div>
        <CalendarioBoton />
      </div>
      <div>
        <Boton />
        Contacto
      </div>
      <div>
        <MusicaBoton />
      </div>
    </div>
  );
}
