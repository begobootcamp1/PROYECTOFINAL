import "./Header.css";
// import foto from "../../public/imagenes/imagenesCarousel/Yo.webp";

export default function Header() {
  return (
    <div className="header">
      <div>
        <img
          className="header__img"
          img={foto}
          type="imagen/webp"
          width="200 px"
          alt="foto"
        />
      </div>
      <h1 className="header__title">Mi Título</h1>
    </div>
  );
}
