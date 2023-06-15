import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context/Global";
import ItemPicker from "../../Components/ItemPicker/ItemPicker";

const Oraculo = () => {
  const { Tablas } = useContext(GlobalContext);

  const [disable, setdisable] = useState(false);
  const [seed, setSeed] = useState(1);

  const reset = (ev) => {
    if (disable) {
      console.log("Off");
      return;
    }
    ev.stopPropagation();
    setSeed(Math.random());
  };
  return (
    <div>
      <h1>Acción & Tema</h1>
      <div
        className="flex justify-center bg-slate-600"
        key={seed}
        onClick={(e) => reset(e)}
      >
        <div
          className="flex flex-col items-center z-10"
          onMouseEnter={() => {
            setdisable(true);
          }}
          onMouseLeave={() => {
            setdisable(false);
          }}
        >
          <h1>Accion</h1>
          <ItemPicker array={Tablas.OraculoAccion}></ItemPicker>
        </div>
        <div
          className="flex flex-col items-center z-10"
          onMouseEnter={() => {
            setdisable(true);
          }}
          onMouseLeave={() => {
            setdisable(false);
          }}
        >
          <h1>Tema</h1>
          <ItemPicker array={Tablas.OraculoTema}></ItemPicker>
        </div>
      </div>
      <h1>Dominio</h1>
      <ItemPicker array={Tablas.OraculoDominio}></ItemPicker>
      <h1>Aspecto</h1>
      <ItemPicker array={Tablas.OraculoAspecto}></ItemPicker>
      <h1>Sitio</h1>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <h1>Enfoque</h1>
          <ItemPicker array={Tablas.OraculoSitioEnfoque}></ItemPicker>
        </div>
        <div className="flex flex-col items-center">
          <h1>Tema</h1>
          <ItemPicker array={Tablas.OraculoSitioTema}></ItemPicker>
        </div>
      </div>
    </div>
  );
};

export default Oraculo;
