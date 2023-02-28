//import { canciones } from "../../../public/canciones";
import "./Musica.css";

// const canciones = [
//   { titulo: "Angel de la noche", artista: "Marisol" },
//   { titulo: "Buleria", artista: "David Bisbal" },
//   { titulo: "Como Olvidar", artista: "David Bisbal" },
//   { titulo: "Esta ausencia", artista: "David Bisbal" },
//   { titulo: "Oye el Boom", artista: "David Bisbal" },
//   { titulo: "Domingo de Feria", artista: "David Bisbal" },
//   { titulo: "El destino", artista: "Rocío Dúrcal" },
//   { titulo: "La media vuelta", artista: "Rocío Dúrcal" },
//   { titulo: "Como Olvidar", artista: "David Bisbal" },
// ];

let canciones = [];

const Playlist = ({ canciones }) => {
  return (
    <div className="playlist">
      <h2>Mis Canciones</h2>
      <ul>
        {canciones.map((cancion, index) => (
          <li key={index}>
            <span className="titulo">{cancion.titulo}</span>
            <span className="artista">{cancion.artista}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Musica() {
  return (
    <div>
      <Playlist canciones={canciones} />
    </div>
  );
}
