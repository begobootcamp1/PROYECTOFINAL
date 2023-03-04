import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function admin() {
    navigate("/administrador");
  }
  return (
    <div className="header">
      <div>
        <img
          className="header__img"
          src={`http://localhost:5173/imagenes/imagenesCarousel/Yo.webp`}
          width="200 px"
          alt="foto"
        />
      </div>
      <h1 className="header__title">
        <button onClick={() => admin()}> Mi Título</button>
      </h1>
    </div>
  );
}
