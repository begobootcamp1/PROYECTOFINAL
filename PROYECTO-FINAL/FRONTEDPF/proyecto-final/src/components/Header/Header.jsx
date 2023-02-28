import "./Header.css";

export default function Header() {
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
      <h1 className="header__title">Mi Título</h1>
    </div>
  );
}
