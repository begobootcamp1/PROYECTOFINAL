import "./Botonera.css";
import CalendarioBoton from "../CalendarioBoton/CalendarioBoton";
import EmergenciaBoton from "../EmergenciaBoton/EmergenciaBoton";
import PastilleroBoton from "../PastilleroBoton/PastilleroBoton";
import MusicaBoton from "../MusicaBoton/MusicaBoton";
import AlbumBoton from "../AlbumBoton/AlbumBoton";
//import ContactoBoton from "../ContactoBoton/ContactoBoton";

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
        <AlbumBoton />
      </div>
      <div>
        <CalendarioBoton />
      </div>
      {/* <div>
        <ContactoBoton />
      </div> */}
      <div>
        <MusicaBoton />
      </div>
    </div>
  );
}
