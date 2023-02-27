import Header from "../../components/Header/Header";
import BarraLateral from "../../components/BarraLateral/BarraLateral";
import Botonera from "../../components/Botonera/Botonera";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="BarraYBotonera">
        <div style={{ display: "flex" }}>
          {/* buscar función para darle a un hijo el 20% y al otro el 80% */}
          <BarraLateral />
          <Botonera />
        </div>
      </div>
    </>
  );
}
