import React from "react";

import { Tablas } from "../assets/Tablas";
import { Amenaza } from "../assets/Amenaza";
import { Monstruo } from "../assets/Monstruo.js";
import { Nombre } from "../assets/Nombre.js";
import { Combate } from "../assets/Combate.js";
import { Personaje } from "../assets/Personaje.js";
import { Inflexion } from "../assets/Inflexion.js";
import { Trampa } from "../assets/Trampa.js";
import { Asentamiento } from "../assets/Asentamiento.js";
import { Lugar } from "../assets/Lugar.js";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <>
      <GlobalContext.Provider
        value={{
          Tablas,
          Amenaza,
          Monstruo,
          Nombre,
          Combate,
          Personaje,
          Inflexion,
          Trampa,
          Asentamiento,
          Lugar,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};
