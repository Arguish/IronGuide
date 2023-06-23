import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Landing from "../Pages/Landing/Landing.jsx";
import About from "../Pages/About/About.jsx";
import Destino from "../Pages/Destino/Destino.jsx";
import Aventura from "../Pages/Aventura/Aventura.jsx";
import Relacion from "../Pages/Relacion/Relacion.jsx";
import Combate from "../Pages/Combate/Combate.jsx";
import Sufrimiento from "../Pages/Sufrimiento/Sufrimiento.jsx";
import Delve from "../Pages/Delve/Delve.jsx";
import Busqueda from "../Pages/Busqueda/Busqueda.jsx";
import Oraculo from "../Pages/Oraculo/Oraculo.jsx";
import All from "../Pages/All/All.jsx";

const Directory = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/About" element={<About />} />
      <Route path="/Destino" element={<Destino />} />
      <Route path="/Aventura" element={<Aventura />} />
      <Route path="/Relacion" element={<Relacion />} />
      <Route path="/Combate" element={<Combate />} />
      <Route path="/Sufrimiento" element={<Sufrimiento />} />
      <Route path="/Delve" element={<Delve />} />
      <Route path="/Busqueda" element={<Busqueda />} />
      <Route path="/Oraculo" element={<Oraculo />} />
      <Route path="/*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};

export default Directory;
