import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context/Global";
import ItemPicker from "../../Components/ItemPicker/ItemPicker";
import PickerGroup from "../../Components/PickerGroup/PickerGroup";

const Oraculo = () => {
  const {
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
  } = useContext(GlobalContext);

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
        title={"Lugar"}
        array={[Lugar.Region, Lugar.Lugar, Lugar.Descriptor, Lugar.Costa]}
        subtitles={["Región", "Lugar", "Descriptor", "Costa"]}
      />
      <PickerGroup
        title={"Asentamiento"}
        array={[
          Asentamiento.AsentamientoNombrePrimero,
          Asentamiento.AsentamientoNombreSegundo,
          Asentamiento.AsentamientoProblema,
        ]}
        subtitles={["Nombre 1/2", "Nombre 2/2", "Problema"]}
      />
      <PickerGroup
        title={"Trampa"}
        array={[Trampa.TrampaEvento, Trampa.TrampaComponente]}
        subtitles={["Evento", "Componente"]}
      />
      <PickerGroup
        title={"Punto de Inflexion"}
        array={[
          Inflexion.RepercucionMistica,
          Inflexion.GiroArgumental,
          Inflexion.NivelDesafio,
        ]}
        subtitles={["Repercucion Mistica", "Giro Argumental", "Nv Desafío"]}
      />
      <PickerGroup
        title={"Personaje"}
        array={[
          Personaje.PersonajeRol,
          Personaje.PersonajeProposito,
          Personaje.PersonajeDescriptor,
          Personaje.PersonajeDisposicion,
        ]}
        subtitles={["Rol", "Proposito", "Descriptor", "Disposicion"]}
      />
      <PickerGroup
        title={"Combate"}
        array={[
          Combate.CombateMetodo,
          Combate.CombateBlanco,
          Combate.CombateAccion,
        ]}
        subtitles={["Metodo", "Blanco", "Acción"]}
      />
      <PickerGroup
        title={"Nombres"}
        array={[
          Nombre.Nombres1,
          Nombre.Nombres2,
          Nombre.NombresGigantes,
          Nombre.NombresTrolls,
          Nombre.NombresVarus,
        ]}
        subtitles={["Nombres", "Apellidos", "Gigantes", "Trolls", "Varus"]}
      />
      <PickerGroup
        title={"Monstruosidad"}
        array={[
          Monstruo.MonstruoTamano,
          Monstruo.MonstruoForma,
          Monstruo.MonstruoCaracteristica,
          Monstruo.MonstruoHabilidad,
        ]}
        subtitles={["Tamaño", "Forma", "Caracteristica", "Habilidad"]}
      />
      <PickerGroup
        title={"Categoría de Amenaza"}
        array={[Amenaza.Categoria]}
        subtitles={[""]}
      />
      <PickerGroup
        title={"Amenazas"}
        array={[
          Amenaza.Emergente,
          Amenaza.Condenado,
          Amenaza.Ambiental,
          Amenaza.Plaga,
          Amenaza.Criatura,
          Amenaza.Horda,
          Amenaza.Lider,
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
