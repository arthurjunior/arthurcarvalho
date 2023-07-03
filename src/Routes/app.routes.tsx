import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Contato from "../Pages/Contato";
import Projetos from "../Pages/Projetos";
import About from "../Pages/About";

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
