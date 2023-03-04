import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./components/Layout";
import Administrador from "./components/Administrador/Administrador";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/administrador" element={<Administrador />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
