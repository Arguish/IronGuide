import React from "react";

import { Tablas } from "../assets/Tablas";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <>
      <GlobalContext.Provider value={{ Tablas }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};
