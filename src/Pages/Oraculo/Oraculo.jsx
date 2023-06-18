import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context/Global";
import ItemPicker from "../../Components/ItemPicker/ItemPicker";
import PickerGroup from "../../Components/PickerGroup/PickerGroup";

const Oraculo = () => {
  const { Tablas } = useContext(GlobalContext);

  return (
    <div>
      <PickerGroup
        title={"Acción & Tema"}
        array={[Tablas.OraculoAccion, Tablas.OraculoTema]}
      />
      <PickerGroup
        title={"Sitio"}
        array={[
          Tablas.OraculoDominio,
          Tablas.OraculoAspecto,
          Tablas.OraculoSitioTema,
          Tablas.OraculoSitioEnfoque,
        ]}
      />
      <PickerGroup
        title={"Asentamiento"}
        array={[
          Tablas.AsentamientoNombrePrimero,
          Tablas.AsentamientoNombreSegundo,
          Tablas.AsentamientoProblema,
        ]}
      />
      <PickerGroup
        title={"Trampa"}
        array={[Tablas.TrampaEvento, Tablas.TrampaComponente]}
      />
      <PickerGroup
        title={"Punto de Inflexion"}
        array={[
          Tablas.RepercucionMistica,
          Tablas.GiroArgumental,
          Tablas.NivelDesafio,
        ]}
      />
      <PickerGroup
        title={"Personaje"}
        array={[
          Tablas.PersonajeRol,
          Tablas.PersonajeProposito,
          Tablas.PersonajeDescriptor,
          Tablas.PersonajeDisposicion,
        ]}
      />
      <PickerGroup
        title={"Combate"}
        array={[
          Tablas.CombateMetodo,
          Tablas.CombateBlanco,
          Tablas.CombateAccion,
        ]}
      />
      <PickerGroup
        title={"Nombres"}
        array={[
          Tablas.Nombres1,
          Tablas.Nombres2,
          Tablas.NombresGigantes,
          Tablas.NombresTrolls,
          Tablas.NombresVarus,
        ]}
      />
      <PickerGroup
        title={"Monstruosidad"}
        array={[
          Tablas.MonstruoTamano,
          Tablas.MonstruoForma,
          Tablas.MonstruoCaracteristica,
          Tablas.MonstruoHabilidad,
        ]}
      />
      <PickerGroup
        title={"Categoría de Amenaza"}
        array={[Tablas.AmenazaCategoria]}
      />
      <PickerGroup
        title={"Amenazas"}
        array={[
          Tablas.AmenazaEmergente,
          Tablas.AmenazaCondenado,
          Tablas.AmenazaAmbiental,
          Tablas.AmenazaPlaga,
          Tablas.AmenazaCriatura,
          Tablas.AmenazaHorda,
          Tablas.AmenazaLider,
        ]}
      />
    </div>
  );
};

export default Oraculo;
