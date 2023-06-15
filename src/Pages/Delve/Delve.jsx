import React, { useContext } from "react";
import { GlobalContext } from "../../Context/Global";
import ItemPicker from "../../Components/ItemPicker/ItemPicker";

const Delve = () => {
  const { Tablas } = useContext(GlobalContext);
  return (
    <div>
      <h1>DESCUBRIR UN SITIO</h1>
      <p>
        Cuando decides entrar en un lugar peligroso para conseguir un objetivo.
        Elige el tema y el dominio que mejor representen su naturaleza o
        Pregunta al Oráculo, y dale un rango:
      </p>
      <ul>
        <li>
          <strong>Sitio problemático:</strong> 3 progresos por área.
        </li>
        <li>
          <strong>Sitio peligroso:</strong> 2 progresos por área.
        </li>
        <li>
          <strong>Sitio formidable:</strong> 1 progreso por área.
        </li>
        <li>
          <strong>Sitio extremo:</strong> 2 marcas por área.
        </li>
        <li>
          <strong>Sitio épico:</strong> 1 marca por área.
        </li>
      </ul>
      <p>
        Si regresas a un lugar explorado previamente, tira ambos dados de
        desafío, coge el de valor más bajo y borra ese número de ranuras de
        progreso. Luego, haz el movimiento Explorar las Profundidades para
        explorar ese lugar.
      </p>
      <h1>EXPLORAR LAS PROFUNDIDADES</h1>
      <p>
        Cuando atravieses un área en un sitio peligroso, visualiza tu entorno
        (utiliza Pregunta al Oráculo si dudas). Entonces, considera cómo
        realizar la acción. Si exploras esta área...
      </p>
      <ul>
        <li>
          <strong>Con prisa:</strong> Tira +filo.
        </li>
        <li>
          <strong>Con sigilo o astucia:</strong> Tira +sombra.
        </li>
        <li>
          <strong>Con observación, intuición o pericia:</strong> Tira +mente.
        </li>
      </ul>
      <p>
        Éxito Total: Te internas más en las profundidades. Marca un progreso y
        realiza Encontrar una Oportunidad.
      </p>
      <p>Éxito Parcial: Realiza una tirada en la siguiente tabla según...</p>
      <div className="flex">
        <div className="flex flex-col items-center border-2 m-1 rounded w-1/3">
          <h1>FILO</h1>
          <ItemPicker array={Tablas.ExplorartablaFilo}></ItemPicker>
        </div>
        <div className="flex flex-col items-center border-2 m-1 rounded w-1/3">
          <h1>SOMBRA</h1>
          <ItemPicker array={Tablas.ExplorartablaSombra}></ItemPicker>
        </div>
        <div className="flex flex-col items-center border-2 m-1 rounded w-1/3">
          <h1>INGENIO</h1>
          <ItemPicker array={Tablas.ExplorartablaIngenio}></ItemPicker>
        </div>
      </div>
      <p>Fallo: Revelar un Peligro</p>
      <h1>ENCUENTRA UNA OPORTUNIDAD</h1>
      <p>
        Cuando encuentres una situación o característica útil dentro de un
        lugar, tira en la siguiente tabla. Si estás haciendo este movimiento
        como resultado de Éxito Total en Ahonda las Profundidades, puedes
        escoger o imaginar una oportunidad en lugar de tirar.
      </p>
      <ul>
        <li>Escoge una:</li>
        <li>
          <strong>Oportunidad de escape:</strong> Encuentras una ruta o salida
          segura.
        </li>
        <li>
          <strong>Oportunidad de información:</strong> Descubres un libro,
          documento o inscripción relevante.
        </li>
        <li>
          <strong>Oportunidad de recursos:</strong> Encuentras provisiones,
          armas o equipo útil.
        </li>
        <li>
          <strong>Oportunidad de conocimiento:</strong> Descubres un secreto,
          pista o revelación que te acerca a tu objetivo.
        </li>
        <li>
          <strong>Oportunidad de aliados:</strong> Encuentras a alguien
          dispuesto a ayudarte en tu búsqueda.
        </li>
        <li>
          <strong>Oportunidad de ventaja táctica:</strong> Descubres una
          posición elevada, una emboscada o una manera de ganar una ventaja
          táctica en una confrontación.
        </li>
      </ul>
      <ItemPicker array={Tablas.EncuentraUnaOportunidad}></ItemPicker>
      <ul>
        <li>
          <strong>Visión o preparación:</strong> Ganas +2 de impulso.
        </li>
        <li>
          <strong>Realiza una acción ahora:</strong> Tú y cualquier aliado
          podéis realizar un movimiento (no de progreso) que aproveche
          directamente la oportunidad. Cuando lo hagas, suma +1 y con un éxito
          ganas +1 de impulso.
        </li>
      </ul>
      <h1>DESCUBRE UN PELIGRO</h1>
      <p>
        Cuando te encuentres con una situación de riesgo dentro de un sitio,
        imagina en qué consiste el peligro o tira en la siguiente tabla:
      </p>
      <ItemPicker array={Tablas.DescubreUnPeligro}></ItemPicker>
      <h1>LOCALIZAR TU OBJETIVO (PROGRESO)</h1>
      <p>
        Cuando la exploración de un lugar llega a su fin, tira los dados de
        desafío y compáralos con tu progreso. Ignora el impulso.
      </p>
      <p>
        <strong>Éxito Total:</strong> Localizas tu objetivo y la situación te
        favorece. Escoge una:
      </p>
      <ul>
        <li>Haz otro movimiento ahora (no de progreso) y suma +1.</li>
        <li>Ganas +1 de impulso.</li>
      </ul>
      <p>
        <strong>Éxito Parcial:</strong> Localizas tu objetivo, pero encaras un
        peligro o complicación imprevista. Imagina lo que encuentras o Pregunta
        al Oráculo.
      </p>
      <p>
        <strong>Fallo:</strong> Tu objetivo está fuera de alcance, te han
        engañado acerca de su naturaleza o descubres que este lugar alberga
        profundidades insospechadas. Si continúas tu exploración, borra todos
        los progresos marcados y aumenta el rango del sitio en uno (si no es ya
        épico).
      </p>
      <h1>ESCAPAR DE LAS PROFUNDIDADES</h1>
      <p>
        Cuando huyes o te retiras de un lugar, considera la situación y tu
        enfoque. Si tu...
      </p>
      <ul>
        <li>Encuentras la salida más rápida: Tira + filo.</li>
        <li>Te enfrentas contra los horrores de este lugar: Tira + corazón.</li>
        <li>Luchas para salir: Tira + hierro.</li>
        <li>Vuelves sobre tus pasos o un camino alternativo: Tira + mente.</li>
        <li>Te mantienes fuera de la vista: Tira + sombra.</li>
      </ul>
      <p>
        <strong>Éxito Total:</strong> Realizas tu camino a salvo hasta el
        exterior. Ganas +1 impulso.
      </p>
      <p>
        <strong>Éxito Parcial:</strong> Encuentras un camino para salir, pero
        este lugar exige su precio. Escoge una:
      </p>
      <ul>
        <li>Estás desgastado o herido: Soporta el daño.</li>
        <li>La experiencia te deja agitado: Soporta el estrés.</li>
        <li>Dejas atrás algo importante.</li>
        <li>Encaras una nueva complicación al emerger.</li>
        <li>Te retrasas y eso tiene un coste.</li>
        <li>Un habitante trama su venganza.</li>
      </ul>
      <p>
        <strong>Fallo:</strong> Una enorme amenaza o un gran obstáculo se
        interponen en tu camino. Descubre un peligro. Si sobrevives, realiza tu
        huida.
      </p>
    </div>
  );
};

export default Delve;
