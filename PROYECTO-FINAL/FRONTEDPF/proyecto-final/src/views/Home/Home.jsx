import Header from "../../components/Header/Header";
import BarraLateral from "../../components/BarraLateral/BarraLateral";
import Botonera from "../../components/Botonera/Botonera";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="BarraYBotonera">
          <div style={{ display: "flex" }}>
            <BarraLateral />
            <Botonera />
          </div>
        </div>
      </div>
    </>
  );
}
