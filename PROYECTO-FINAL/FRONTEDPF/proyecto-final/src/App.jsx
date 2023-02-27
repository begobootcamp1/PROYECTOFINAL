import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./components/Layout";
//import VistaBotonera from "./views/VistaBotonera/VistaBotonera";
//import VistaBarraLateral from "./views/VistaBarraLateral/VistaBarraLateral";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="Botonera" element={<VistaBotonera />} /> */}
            {/* <Route path="BarraLateral" element={<VistaBarraLateral />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
