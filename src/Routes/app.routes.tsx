import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Contato from "../Pages/Contato";
import About from "../Pages/About";
import Projetos from "../Pages/Projects";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}
