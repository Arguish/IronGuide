import React, { useContext } from "react";
import { GlobalContext } from "../../Context/Global";

import ItemPicker from "../../Components/ItemPicker/ItemPicker";

const Destino = () => {
  const { Tablas } = useContext(GlobalContext);
  console.log(Tablas.PagarElPrecio);
  return (
    <div>
      <ItemPicker array={Tablas.PagarElPrecio}></ItemPicker>
    </div>
  );
};

export default Destino;
