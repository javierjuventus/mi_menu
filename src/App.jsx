import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Proyectos from "./pages/Proyectos";
import Unidad1 from "./pages/Unidad1";
import Unidad2 from "./pages/Unidad2";
import Unidad3 from "./pages/Unidad3";
import Unidad4 from "./pages/Unidad4";
import Reflexion from "./pages/Reflexion";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/unidad1" element={<Unidad1 />} />
        <Route path="/unidad2" element={<Unidad2 />} />
        <Route path="/unidad3" element={<Unidad3 />} />
        <Route path="/unidad4" element={<Unidad4 />} />
        <Route path="/reflexion" element={<Reflexion />} />
      </Routes>
    </BrowserRouter>
  );
}
