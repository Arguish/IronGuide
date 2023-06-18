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
        subtitles={["Acción", "Tema"]}
      />
      <PickerGroup
        title={"Sitio"}
        array={[
          Tablas.OraculoDominio,
          Tablas.OraculoAspecto,
          Tablas.OraculoSitioTema,
          Tablas.OraculoSitioEnfoque,
        ]}
        subtitles={["Dominio", "Aspecto", "Tema", "Enfoque"]}
      />
      <PickerGroup
        title={"Asentamiento"}
        array={[
          Tablas.AsentamientoNombrePrimero,
          Tablas.AsentamientoNombreSegundo,
          Tablas.AsentamientoProblema,
        ]}
        subtitles={["Nombre 1/2", "Nombre 2/2", "Problema"]}
      />
      <PickerGroup
        title={"Trampa"}
        array={[Tablas.TrampaEvento, Tablas.TrampaComponente]}
        subtitles={["Evento", "Componente"]}
      />
      <PickerGroup
        title={"Punto de Inflexion"}
        array={[
          Tablas.RepercucionMistica,
          Tablas.GiroArgumental,
          Tablas.NivelDesafio,
        ]}
        subtitles={["Repercucion Mistica", "Giro Argumental", "Nv Desafío"]}
      />
      <PickerGroup
        title={"Personaje"}
        array={[
          Tablas.PersonajeRol,
          Tablas.PersonajeProposito,
          Tablas.PersonajeDescriptor,
          Tablas.PersonajeDisposicion,
        ]}
        subtitles={["Rol", "Proposito", "Descriptor", "Disposicion"]}
      />
      <PickerGroup
        title={"Combate"}
        array={[
          Tablas.CombateMetodo,
          Tablas.CombateBlanco,
          Tablas.CombateAccion,
        ]}
        subtitles={["Metodo", "Blanco", "Acción"]}
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
        subtitles={["Nombres", "Apellidos", "Gigantes", "Trolls", "Varus"]}
      />
      <PickerGroup
        title={"Monstruosidad"}
        array={[
          Tablas.MonstruoTamano,
          Tablas.MonstruoForma,
          Tablas.MonstruoCaracteristica,
          Tablas.MonstruoHabilidad,
        ]}
        subtitles={["Tamaño", "Forma", "Caracteristica", "Habilidad"]}
      />
      <PickerGroup
        title={"Categoría de Amenaza"}
        array={[Tablas.AmenazaCategoria]}
        subtitles={[""]}
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
        subtitles={[
          "Emergente",
          "Condenado",
          "Ambiental",
          "Plaga",
          "Criatura",
          "Horda",
          "Lider",
        ]}
      />
    </div>
  );
};

export default Oraculo;
