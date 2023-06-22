import React from "react";
import FancyCard from "../../Components/FancyCard/FancyCard";
import DropDown from "../../Components/DropDown/DropDown";
import Result from "../../Components/Result/Result.jsx";

const Aventura = () => {
  return (
    <div
      className="h-screen flex-col gap-2"
      style={{
        overflow: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      <FancyCard
        url={
          "https://images.pexels.com/photos/10068848/pexels-photo-10068848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        title={<h1>AFRONTAR EL PELIGRO</h1>}
      >
        <p>
          Cuando intentes algo arriesgado o reaccionas a una amenaza inminente,
          visualiza tu acción y tira.
        </p>
        <DropDown title={<p>Si actúas:</p>}>
          <ul>
            <li>▶ Con rapidez, agilidad o precisión, tira + filo.</li>
            <li>▶ Con sigilo,engaño o artimañas, tira + sombra.</li>
            <li>▶ Con carisma,lealtad o coraje, tira + corazón.</li>
            <li>
              ▶ Con una acción agresiva, una defensa enérgica, fuerza o
              resistencia, tira + hierro.
            </li>
            <li>▶ Conocimientos, perspicacia u observación, tira + mente.</li>
          </ul>
        </DropDown>
        <Result exito>
          <p>Lo consigues o evitas la amenaza.</p>
          <p>Ganas +1 a Impulso.</p>
        </Result>
        <Result semi>
          <p>Tienes éxito, pero con un coste.</p>
        </Result>
        <DropDown title={<p>Elige una:</p>}>
          <ul>
            <li>
              ◆ No llegas a tiempo.Se desvanece tu ventaja o enfrentas un nuevo
              peligro: Pierdes -1 Impulso. ◆ Estas agotado o herido: Soportar el
              daño (1 de daño).
            </li>
            <li>
              ◆ Estás asustado o desanimado: Soportar el estrés (1 de estrés).
            </li>
            <li>◆ Gastas recursos: Pierdes -1 de suministros.</li>
          </ul>
        </DropDown>
        <Result fallo>
          <p>
            Fracasas o tu progreso se ve obstaculizado por un giro dramático de
            los acontecimientos. Paga el precio.
          </p>
        </Result>
      </FancyCard>
      <FancyCard
        title={"CREAR UNA VENTAJA"}
        url="https://images.pexels.com/photos/3680094/pexels-photo-3680094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <p>
          Cuando analizas una situación, te preparas o intentas mejorar tu
          efectividad, concreta como y tira.
        </p>
        <DropDown title={"Si actúas..."}>
          <ul>
            <li>▶ Con rapidez, agilidad o precisión, tira + filo.</li>
            <li>▶ Con carisma, lealtad o coraje, tira + corazón.</li>
            <li>
              ▶ Con acción agresiva, una defensa enérgica, fuerza o resistencia,
              tira + hierro.
            </li>
            <li>▶ Con sigilo, engaño o artimañas, tira + sombra.</li>
            <li>▶ Conocimientos, perspicacia u observación, tira + mente.</li>
          </ul>
        </DropDown>
        <Result exito>
          <p>Éxito Total: Ganas una ventaja.</p>
          <DropDown title={"Elige una:"}>
            <ul>
              <li>
                ◆ Tomas el control: Haz otro movimiento inmediatamente (no de
                progreso) Al hacerlo suma +1.
              </li>
              <li>◆ Te preparas para actuar: Ganas +2 de impulso.</li>
            </ul>
          </DropDown>
        </Result>
        <Result semi>
          <p>Éxito Parcial: Tu ventaja es transitoria. Ganas +1 de impulso.</p>
        </Result>
        <Result fallo>
          <p>
            Fallo: Fracasas o tus suposiciones te la juegan. Paga el precio.
          </p>
        </Result>
      </FancyCard>
      <FancyCard
        title="REUNIR INFORMACIÓN"
        url="https://images.pexels.com/photos/10547071/pexels-photo-10547071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <p>
          Cuando inspeccionas un área, haces preguntas, realizas una
          investigación o sigues un rastro, tira + mente. Si estás en una
          comunidad o haces preguntas a alguien con quien compartes un vínculo,
          suma +1.
        </p>
        <Result exito>
          <p>
            Éxito Total: Descubres algo útil y específico. El camino que debes
            seguir o lo que debes hacer para progresar queda claro. Imagina lo
            que descubres, y en caso de tener dudas Pregunta al Oráculo. Ganas
            +2 de impulso.
          </p>
        </Result>
        <Result semi>
          <p>
            Éxito Parcial: La información complica tu búsqueda o introduce un
            nuevo peligro. Imagina que descubres (o Pregunta al Oráculo). Ganas
            +1 de impulso.
          </p>
        </Result>
        <Result fallo>
          <p>
            Fallo: Tu investigación descubre una amenaza grave o revela una
            verdad incómoda que compromete tu búsqueda. Paga el precio.
          </p>
        </Result>
      </FancyCard>
      <FancyCard
        title="CURAR"
        url="https://images.pexels.com/photos/13719328/pexels-photo-13719328.jpeg?auto=compress&cs=tinysrgb&w=600"
      >
        <p>
          Cuando tratas una lesión o una dolencia, tira + mente. Si estás
          tratando tus propias heridas, tira + mente o + hierro, la que sea
          menor.
        </p>
        <Result exito>
          <p>
            Éxito Total: El tratamiento funciona. Si tu personaje o el personaje
            aliado que tratas está herido, puedes eliminar dicha condición.
            Después, tu personaje o el aliado gana +2 de salud.
          </p>
        </Result>
        <Result semi>
          <p>
            Éxito Parcial: Como arriba, pero pierdes -1 de suministros o -1 de
            impulso, a tu elección.
          </p>
        </Result>
        <Result fallo>
          <p>Fallo: El tratamiento es ineficaz. Paga el precio</p>
        </Result>
      </FancyCard>
      <FancyCard
        title="REABASTECERSE"
        url="https://images.pexels.com/photos/5023730/pexels-photo-5023730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <p>
          Cuando cazas, recoges alimentos o buscas para encontrar algo útil,
          tira + mente.
        </p>
        <Result exito>
          <p>Éxito Total: Aumentas tus suministros. Ganas +2 suministros.</p>
        </Result>
        <Result semi>
          <p>
            Éxito Parcial: Ganas hasta +2 de suministros, pero pierdes -1 de
            impulso por cada punto ganado.
          </p>
        </Result>
        <Result fallo>
          <p>Fallo: No encuentras nada de útil. Paga el precio.</p>
        </Result>
      </FancyCard>
      <FancyCard
        title="ACAMPAR"
        url="https://images.pexels.com/photos/2463815/pexels-photo-2463815.jpeg?auto=compress&cs=tinysrgb&w=600"
      >
        <p>
          Cuando descansas y te repones durante varias horas en la naturaleza,
          tira + suministros.
        </p>
        <Result exito>
          <p> Tu y cada aliado elegís dos.</p>
        </Result>
        <Result semi>
          <DropDown title={"Elige una:"}>
            <ul>
              <li> ◆ Recuperarte: Tú y tus compañeros ganáis +1 Salud.</li>
              <li>
                ◆ Compartir: Pierdes -1 de suministros y tanto tú como tus
                compañeros ganáis +1 Salud.
              </li>
              <li>◆ Relajarte: Ganas +1 de entereza.</li>
              <li>◆ Concentrarte: Ganas +1 impulso.</li>
              <li>
                ◆ Prepararte: Al abandonar el campamento, obtén una bonificación
                de +1 si Emprendes un viaje.
              </li>
            </ul>
          </DropDown>
        </Result>
        <Result fallo>
          <p>No hallas descanso. Paga el precio.</p>
        </Result>
      </FancyCard>
      <FancyCard
        title="REVISAR TU EQUIPO"
        url="https://images.pexels.com/photos/5023638/pexels-photo-5023638.jpeg?auto=compress&cs=tinysrgb&w=600"
      >
        <p>
          Cuando miras si tienes un objeto de utilidad en concreto, y tienes al
          menos +1 en suministros, tira + suministros.
        </p>
        <Result exito>
          <p>Éxito Total: Lo tienes. Ganas +1 en impulso.</p>
        </Result>
        <Result semi>
          <p>
            Éxito Parcial: Lo tienes, pero tus recursos disminuyen. Ganas +1 a
            impulso y -1 a suministros.
          </p>
        </Result>
        <Result fallo>
          <p>
            Fallo: No lo tienes y la situación se vuelve todavía más peligrosa
            Paga el precio.
          </p>
        </Result>
      </FancyCard>
      <FancyCard
        url="https://images.pexels.com/photos/13472190/pexels-photo-13472190.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="VIAJAR"
      >
        <p>
          Cuando viajas por tierras desconocidas o peligrosas, primero determina
          el nivel de desafio de tu viaje.
        </p>
        <DropDown title={"Nivel de desafio"}>
          <ul>
            <li>◆ Viaje problemático: 3 casillas para cada lugar de paso.</li>
            <li>◆ Viaje peligroso: 2 casillas por cada lugar de paso.</li>
            <li>◆ Viaje formidable: 1 casilla por cada lugar de paso.</li>
            <li>◆ Viaje extremo: 2 marcas por cada lugar de paso.</li>
            <li>
              ◆ Viaje épico: 1 marca por cada lugar de paso. Después, para cada
              tramo del viaje, tira + mente. Si partes de una comunidad con la
              que tienes un vínculo, suma +1 a la tirada inicial.
            </li>
          </ul>
        </DropDown>
        <Result exito>
          Éxito Total: Llegas a un lugar de paso en tu viaje. Si no conoces el
          lugar, imagina como es o Pregunta al Oráculo. A continuación...
          <DropDown title={"Escoge una:"}>
            <ul>
              <li>
                {" "}
                ◆ Haces un buen uso de tus recursos. Registra el progreso.
              </li>
              <li>
                ◆ Fuerzas la marcha: Registras el progreso y ganas +1 de
                impulso, pero pierdes -1 de suministros.
              </li>
            </ul>
          </DropDown>
        </Result>
        <Result semi>
          <p>
            Éxito Parcial: Alcanzas un lugar de paso. Registra el progreso, pero
            pierdes -1 de suministros.
          </p>
        </Result>
        <Result fallo>
          <p>
            Fallo: Viaje interrumpido por un acontecimiento. Paga el precio.
          </p>
        </Result>
      </FancyCard>
      <FancyCard
        title={
          <h1>
            ALCANZAR TU DESTINO <br /> (M. PROGRESO)
          </h1>
        }
        url="https://images.pexels.com/photos/11116012/pexels-photo-11116012.jpeg?auto=compress&cs=tinysrgb&w=600"
      >
        <p>
          Cuando tu viaje llega a su fin, tira los dados de desafío y compáralos
          con tu progreso. No tengas en cuenta el impulso.
        </p>
        <Result exito>
          <p>Éxito Total: La situación al llegar te es propicia.</p>
          <DropDown title={"Escoge una:"}>
            <ul>
              <li>◆ Haz otro movimiento ahora (no de progreso) y suma +1.</li>
              <li>◆ Ganas +1 de impulso.</li>
            </ul>
          </DropDown>
        </Result>
        <Result semi>
          <p>
            Éxito Parcial: Llegas a tu destino, pero te enfrentas a imprevistos
            en forma de peligros o complicaciones. Concrétalos o Pregunta al
            Oráculo.
          </p>
        </Result>
        <Result fallo>
          <p>
            Fallo: O bien te has perdido sin remedio; o bien una vez allí se
            revela que no ha servido de nada llegar, o tu información sobre el
            destino no era correcta.
          </p>
          <p>
            Si el viaje continúa, elimina todo el progreso salvo una casilla (4
            marcas) y aumenta el nivel de desafío del viaje en uno (excepto si
            ya era épico).
          </p>
        </Result>
      </FancyCard>
    </div>
  );
};

export default Aventura;
