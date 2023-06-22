import React, { useState } from "react";
import NavBtn from "..//NavBtn/NavBtn";

const NavBar = () => {
  const [toggle, settoggle] = useState(false);
  const togle = () => {
    settoggle(!toggle);
  };
  return (
    <div
      className={` absolute z-50 bg-slate-900 px-2 
        ${
          toggle
            ? "rounded-none top-0 left-0 mx-0 h-screen"
            : "rounded-full mx-1"
        }`}
    >
      <h1 className="font-rune text-6xl my-1 mx-1 " onClick={togle}>
        {toggle ? "X" : "O"}
      </h1>
      {toggle && (
        <div
          onClick={() => {
            settoggle(false);
          }}
          className=" mb-6 flex flex-col w-1/3 "
        >
          <NavBtn to="/Destino"></NavBtn>
          <NavBtn to="/Aventura"></NavBtn>
          <NavBtn to="/Relacion"></NavBtn>
          <NavBtn to="/Combate"></NavBtn>
          <NavBtn to="/Sufrimiento"></NavBtn>
          <NavBtn to="/Delve"></NavBtn>
          <NavBtn to="/Busqueda"></NavBtn>
          <NavBtn to="/Oraculo"></NavBtn>
          <NavBtn to="/All"></NavBtn>
          <NavBtn to="/About"></NavBtn>
        </div>
      )}
    </div>
  );
};

export default NavBar;
