import React from "react";
import NavBtn from "..//NavBtn/NavBtn";

const NavBar = () => {
  return (
    <div className=" mb-6 ">
      <NavBtn to="/About"></NavBtn>
      <NavBtn to="/Destino"></NavBtn>
      <NavBtn to="/Aventura"></NavBtn>
      <NavBtn to="/Relacion"></NavBtn>
      <NavBtn to="/Combate"></NavBtn>
      <NavBtn to="/Sufrimiento"></NavBtn>
      <NavBtn to="/Delve"></NavBtn>
      <NavBtn to="/Busqueda"></NavBtn>
      <NavBtn to="/Oraculo"></NavBtn>
    </div>
  );
};

export default NavBar;
