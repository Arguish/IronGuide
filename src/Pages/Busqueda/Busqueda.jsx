import React, { useContext } from "react";
import { GlobalContext } from "../../Context/Global";
import ItemPicker from "../../Components/ItemPicker/ItemPicker";
import MovCard from "../../Components/MovCard/MovCard";
import VSlider from "../../Components/VSlider/VSlider";
import DropDown from "../../Components/DropDown/DropDown";
import FancyCard from "../../Components/FancyCard/FancyCard";

const Busqueda = () => {
  const { Tablas } = useContext(GlobalContext);
  return (
    <VSlider>
      <MovCard
        title={<h1>JURAR POR EL HIERRO</h1>}
        url="https://images.unsplash.com/photo-1644328293740-48c747844f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHZpa2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        description={
          <p>
            Cuando juras por el Hierro que completarás una búsqueda, escribe tu
            juramento y asigna a la búsqueda un nivel de desafío. Después, tira
            +corazón. Si haces ese juramento a una persona o comunidad con la
            que tienes vínculo, suma +1.
          </p>
        }
        exito={
          <p>
            <strong>Éxito Total:</strong> Estás entusiasmado. Está claro lo que
            debes hacer a continuación. Pregunta al Oráculo. Ganas +2 de
            impulso.
          </p>
        }
        semi={
          <p>
            <strong>Éxito Parcial:</strong> Aunque enfrentas el futuro con
            determinación, comienzas tu búsqueda con más preguntas que
            respuestas. Ganas +1 de impulso. Establece qué haces para poner tu
            búsqueda en marcha.
          </p>
        }
        fallo={
          <>
            <p>
              <strong>Fallo:</strong> Has de enfrentar un obstáculo considerable
              antes de comenzar con tu búsqueda. Determina qué se interpone en
              tu camino o Pregunta al Oráculo, y...
            </p>
            <DropDown>
              <ul>
                <li>
                  Sigues adelante: Pierdes -2 de impulso. Haz lo que debas para
                  superar el obstáculo.
                </li>
                <li>Renuncias: Rompe tu juramento.</li>
              </ul>
            </DropDown>
          </>
        }
      ></MovCard>

      <FancyCard
        title={<h1>ALCANZAR UN HITO</h1>}
        url="https://images.unsplash.com/photo-1564598522417-e9ac1425d7c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHZpa2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      >
        <p>
          Cuando haces un progreso significativo en tu búsqueda superando un
          obstáculo crítico, llegando al final de un viaje lleno de peligros,
          resolviendo un misterio, derrotando una amenaza seria, obteniendo
          apoyos vitales o adquiriendo un objeto crucial, registra el progreso.
        </p>
        <ul>
          <li>Misión problemática: Marca 3 progresos.</li>
          <li>Misión peligrosa: Marca 2 progresos.</li>
          <li>Misión formidable: Marca 1 progreso.</li>
          <li>Misión extrema: Marca 2 marcas.</li>
          <li>Misión épica: Haz 1 marca.</li>
        </ul>
      </FancyCard>
      <MovCard
        title={<h1>CUMPLIR TU JURAMENTO (M. PROGRESO)</h1>}
        url="https://images.unsplash.com/photo-1651614698510-3f923136e6cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHx2aWtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        description={
          <p>
            Cuando crees haber cumplido tu palabra dada en un juramento, tira
            dos dados de desafío y compáralos con tu progreso. Ignora el
            impulso.
          </p>
        }
        exito={
          <>
            <p>
              <strong>Éxito Total:</strong> tu misión ha sido completada.
            </p>
            <DropDown title="Marca:">
              <ul>
                <li>Misión problemática: Marca 1 experiencia.</li>
                <li>Misión peligrosa: Marca 2 experiencias.</li>
                <li>Misión formidable: Marca 3 experiencias.</li>
                <li>Misión extrema: Marca 4 experiencias.</li>
                <li>Misión épica: Marca 5 experiencias.</li>
              </ul>
            </DropDown>
          </>
        }
        semi={
          <>
            <p>
              <strong>Éxito Parcial:</strong> hay más por hacer o te das cuenta
              de la verdad de tu misión. Visualiza lo que descubres (Pregunta al
              Oráculo si no estás seguro).
            </p>
            <DropDown title="Luego, marca la experiencia:">
              <ul>
                <li>Misión problemática: Marca 0 experiencia.</li>
                <li>Misión peligrosa: Marca 1 experiencia.</li>
                <li>Misión formidable: Marca 2 experiencias.</li>
                <li>Misión extrema: Marca 3 experiencias.</li>
                <li>Misión épica: Marca 4 experiencias.</li>
              </ul>
              <p>
                Puedes Jurar por el hierro para arreglar las cosas. Si lo haces,
                añade +1.
              </p>
            </DropDown>
          </>
        }
        fallo={
          <>
            <p>
              <strong>Fallo:</strong> tu misión no ha terminado. Visualiza lo
              que sucede (Pregunta al Oráculo si no estás seguro) y...
            </p>
            <DropDown>
              <ul>
                <li>
                  Te comprometes de nuevo: Elimina todo el progreso menos uno y
                  sube el rango de la misión (si no es épica).
                </li>
                <li>Te rindes: Rompe tu juramento.</li>
              </ul>
            </DropDown>
          </>
        }
      ></MovCard>
      <FancyCard
        title={<h1>ROMPER TU JURAMENTO</h1>}
        url="https://images.unsplash.com/photo-1659095332109-16093b523cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg2fHx2aWtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      >
        <p>
          Cuando renuncies a tu misión, traiciones tu promesa o el objetivo sea
          inalcanzable, elimina el voto y Soporta el estrés :
        </p>
        <DropDown
          title="Sufres -entereza
          igual al rango de tu misión"
        >
          <ul>
            <li>Misión problemática: Sufres -1 entereza.</li>
            <li>Misión peligrosa: Sufres -2 entereza.</li>
            <li>Misión formidable: Sufres -3 entereza.</li>
            <li>Misión extrema: Sufres -4 entereza.</li>
            <li>Misión épica: Sufres -5 entereza.</li>
          </ul>
        </DropDown>
        <p>
          Si el juramento fue hecho a una persona o comunidad con la que
          compartes un vínculo, Pon a prueba el vínculo en tu próximo encuentro.
        </p>
      </FancyCard>
      <FancyCard
        title={<h1>MEJORAR</h1>}
        url="https://images.unsplash.com/photo-1528918230037-b8e9a8d403f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvcmdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      >
        <p>
          Cuando practicas tus habilidades, recibes adiestramiento, encuentras
          inspiración, ganas una recompensa u obtienes un compañero, puedes
          gastar 3 puntos de experiencia para adquirir un nuevo recurso o 2
          puntos para mejorar uno que ya tienes.
        </p>
      </FancyCard>
      <FancyCard
        title={<h1>MARCAR TU FRACASO</h1>}
        url="https://images.pexels.com/photos/10547073/pexels-photo-10547073.jpeg?auto=compress&cs=tinysrgb&w=600"
      >
        <p>
          Cuando hagas un movimiento y anotes un error, haz una marca en tu
          registro de fallos. Si anotas un error al hacer un movimiento de
          progreso, marca dos tics.
        </p>
      </FancyCard>
      <MovCard
        title={<h1>APRENDE DE TUS FRACASOS (M. PROGRESO)</h1>}
        url="https://images.pexels.com/photos/9918830/pexels-photo-9918830.jpeg?auto=compress&cs=tinysrgb&w=600"
        description={
          <p>
            Cuando dediques tiempo a reflexionar sobre tus dificultades y pasos
            en falso, y tu registro de fallos sea +6 o más, tira tus dados de
            desafío y compáralos con tu progreso. Ignora el impulso.
          </p>
        }
        exito={
          <>
            <p>
              <strong>Éxito Total:</strong> Te comprometes a hacer un cambio
              dramático. Obtén 3 experiencia y borra todo el progreso.
            </p>
            <DropDown>
              <ul>
                <li>
                  Ajusta el enfoque: descarta un solo activo y gana 2
                  experiencia por cada habilidad marcada.
                </li>
                <li>
                  Haz un juramento: Jurar por el hierro y vuelve a lanzar los
                  dados.
                </li>
                <li>Prepara tus próximos pasos: gana un impulso de +3.</li>
              </ul>
            </DropDown>
          </>
        }
        semi={
          <p>
            <strong>Éxito Parcial:</strong> aprendes de tus errores. Gana 2
            experiencia y borra todo el progreso.
          </p>
        }
        fallo={
          <p>
            <strong>Fallo:</strong> Has aprendido las lecciones equivocadas.
            Gana 1 experiencia y borra todo el progreso. Luego, visualiza cómo
            te embarcaste en un camino nefasto.
          </p>
        }
      ></MovCard>
      <FancyCard
        title={<h1>AVANZAR UNA AMENAZA</h1>}
        url="https://images.pexels.com/photos/682375/pexels-photo-682375.jpeg?auto=compress&cs=tinysrgb&w=600"
      >
        <p>
          Cuando cedas terreno a una amenaza por inacción, fallo o retraso, pasa
          a la tabla a continuación e imagina cómo se manifiesta el cambio en el
          mundo o Pregunta al Oráculo. Con dados iguales, este desarrollo
          también expone un aspecto sorprendente del plan o la naturaleza de la
          amenaza. Si marcas la última casilla de una amenaza, la amenaza logra
          su objetivo o se produce el resultado nefasto final. Debes romper tu
          juramento.
        </p>
      </FancyCard>
      <FancyCard
        title={<h1>MANEJA UNA RAREZA</h1>}
        url="https://images.pexels.com/photos/11739206/pexels-photo-11739206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <ItemPicker array={Tablas.ManejarUnaRareza}></ItemPicker>
      </FancyCard>
      <MovCard
        title={<h1>AFRONTAR LA DESOLACIÓN</h1>}
        url="https://images.unsplash.com/photo-1676192707495-d60b87979989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ4fHx2aWtpbmdvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        description={
          <p>Cuando seas llevado al borde de la desolación, tira +corazón.</p>
        }
        exito={
          <p>
            <strong>Éxito Total:</strong> resistes y sigues adelante.
          </p>
        }
        semi={
          <DropDown>
            <ul>
              <li>
                Te rompes por dentro. Pierdes las ganas de vivir o la cordura,
                pero no antes de hacer un noble sacrificio. Detalla tus últimos
                momentos.
              </li>
              <li>
                Tienes una visión en la que se revela cómo sucederá algo
                terrible. Concrétalo o Pregunta al Oráculo, y Jura por el hierro
                (formidable o extremo) que lo impedirás. Si rechazas la búsqueda
                o fallas al Jurar por el hierro, te pierdes para siempre. En
                caso contrario, vuelves a tus cabales con una carga: marca
                atormentado. La única forma de eliminar la debilidad atormentado
                es completando la búsqueda.
              </li>
            </ul>
          </DropDown>
        }
        fallo={
          <p>
            <strong>Fallo:</strong> Sucumbes a la desesperación o el horror y te
            pierdes para siempre.
          </p>
        }
      ></MovCard>
      <FancyCard
        title={<h1>SIN SUMINISTROS</h1>}
        url="https://images.unsplash.com/photo-1633389254082-d63cc1d6aaf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpa2luZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      >
        <p>
          Cuando se agotan los suministros (se reducen a 0), todo el mundo marca
          la condición sin suministros.
        </p>
        <p>
          Si sufres más pérdidas de suministros mientras estás sin suministros,
          todos los PJ deben reducir su contador de salud, entereza o impulso (o
          una combinación de ellos) en esa misma cantidad (o una combinación
          equivalente) según las circunstancias.
        </p>
      </FancyCard>
      <FancyCard
        title={<h1>AFRONTAR UN CONTRATIEMPO</h1>}
        url="https://images.unsplash.com/photo-1622332515231-18bc53f7ad45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGJyb2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      >
        <p>
          Cuando tu impulso está en su valor mínimo (-6) y sufres una pérdida de
          impulso adicional...
        </p>
        <DropDown>
          <ul>
            <li>
              Absorbe la pérdida de impulso con una combinación equivalente de
              salud, entereza o suministros, según sea apropiado a la situación.
            </li>
            <li>
              Determina un suceso o descubrimiento o Pregunta al Oráculo, que
              obstaculice tu progreso en una búsqueda, viaje o lucha actuales.
              Después, por cada punto de impulso perdido, borra una marca de
              progreso en el contador según...
            </li>
          </ul>
          <DropDown title="Nivel de desafío:">
            <ul>
              <li>Problemático: Borra 3 casillas completas.</li>
              <li>Peligroso: Borra 2 casillas completas.</li>
              <li>Formidable: Borra 1 casilla completa.</li>
              <li>Extremo: Borra 2 marcas.</li>
              <li>Épico: Borra 1 marca.</li>
            </ul>
          </DropDown>
        </DropDown>
      </FancyCard>
    </VSlider>
  );
};

export default Busqueda;
