import React from "react";

const All = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <DropDown
        title={
          <div>
            <h1>AFRONTAR EL PELIGRO</h1>
            <p>
              Cuando intentes algo arriesgado o reaccionas a una amenaza
              inminente, visualiza tu acción y tira.
            </p>
          </div>
        }
      >
        <DropDown title={"Si actuas:"}>
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
        <p>
          Éxito Total: Lo consigues o evitas la amenaza. Ganas +1 a Impulso.
        </p>
        <p>Éxito Parcial: Tienes éxito, pero con un coste.</p>
        <ChooseOne
          title={"Elige una:"}
          array={[
            "◆ No llegas a tiempo.Se desvanece tu ventaja o enfrentas un nuevo peligro: Pierdes -1 Impulso.",
            "◆ Estas agotado o herido: Soportar el daño (1 de daño).",
            "◆ Estás asustado o desanimado: Soportar el estrés (1 de estrés).",
            "◆ Gastas recursos: Pierdes -1 de suministros.",
          ]}
        />
        <p>
          Fallo: Fracasas o tu progreso se ve obstaculizado por un giro
          dramático de los acontecimientos. Paga el precio.
        </p>
      </DropDown>
      <ChooseOne
        title={
          <div>
            <h1>CREAR UNA VENTAJA</h1>
            <p>
              Cuando analizas una situación, te preparas o intentas mejorar tu
              efectividad, concreta como y tira.
            </p>
          </div>
        }
        array={[
          <ChooseOne
            title={"Si actúas..."}
            array={[
              "▶ Con rapidez, agilidad o precisión, tira + filo.",
              "▶ Con carisma, lealtad o coraje, tira + corazón.",
              "▶ Con acción agresiva, una defensa enérgica, fuerza o resistencia, tira + hierro.",
              "▶ Con sigilo, engaño o artimañas, tira + sombra.",
              "▶ Conocimientos, perspicacia u observación, tira + mente.",
            ]}
          />,
          <p>Éxito Total: Ganas una ventaja. </p>,
          <ChooseOne
            title={"Elige una:"}
            array={[
              "◆ Tomas el control: Haz otro movimiento inmediatamente (no de progreso) Al hacerlo suma +1.",
              "◆ Te preparas para actuar: Ganas +2 de impulso.",
            ]}
          />,
          <p>Éxito Parcial: Tu ventaja es transitoria. Ganas +1 de impulso.</p>,

          <p>
            Fallo: Fracasas o tus suposiciones te la juegan. Paga el precio.
          </p>,
        ]}
      />
      <DropDown title={<h1>REUNIR INFORMACIÓN</h1>}>
        <p>
          Cuando inspeccionas un área, haces preguntas, realizas una
          investigación o sigues un rastro, tira + mente. Si estás en una
          comunidad o haces preguntas a alguien con quien compartes un vínculo,
          suma +1.
        </p>
        <p>
          Éxito Total: Descubres algo útil y específico. El camino que debes
          seguir o lo que debes hacer para progresar queda claro. Imagina lo que
          descubres, y en caso de tener dudas Pregunta al Oráculo. Ganas +2 de
          impulso.
        </p>
        <p>
          Éxito Parcial: La información complica tu búsqueda o introduce un
          nuevo peligro. Imagina que descubres (o Pregunta al Oráculo). Ganas +1
          de impulso.
        </p>
        <p>
          Fallo: Tu investigación descubre una amenaza grave o revela una verdad
          incómoda que compromete tu búsqueda. Paga el precio.
        </p>
      </DropDown>
      <DropDown title={<h1>CURAR</h1>}>
        <p>
          Cuando tratas una lesión o una dolencia, tira + mente. Si estás
          tratando tus propias heridas, tira + mente o + hierro, la que sea
          menor.
        </p>
        <p>
          Éxito Total: El tratamiento funciona. Si tu personaje o el personaje
          aliado que tratas está herido, puedes eliminar dicha condición.
          Después, tu personaje o el aliado gana +2 de salud.
        </p>
        <p>
          Éxito Parcial: Como arriba, pero pierdes -1 de suministros o -1 de
          impulso, a tu elección.
        </p>
        <p>Fallo: El tratamiento es ineficaz. Paga el precio</p>
      </DropDown>
      <DropDown title={<h1>REABASTECERSE</h1>}>
        <p>
          Cuando cazas, recoges alimentos o buscas para encontrar algo útil,
          tira + mente.
        </p>
        <p>Éxito Total: Aumentas tus suministros. Ganas +2 suministros.</p>
        <p>
          Éxito Parcial: Ganas hasta +2 de suministros, pero pierdes -1 de
          impulso por cada punto ganado.
        </p>
        <p>Fallo: No encuentras nada de útil. Paga el precio.</p>
      </DropDown>
      <DropDown title={<h1>ACAMPAR</h1>}>
        <p>
          Cuando descansas y te repones durante varias horas en la naturaleza,
          tira + suministros.
        </p>
        <p>Éxito Total: Tu y cada aliado elegís dos.</p>
        <p>Éxito Parcial: Elegís una:</p>
        <ul>
          <li> ◆ Recuperarte: Tú y tus compañeros ganáis +1 Salud.</li>
          <li>
            ◆ Compartir: Pierdes -1 de suministros y tanto tú como tus
            compañeros ganáis +1 Salud.
          </li>
          <li>◆ Relajarte: Ganas +1 de entereza.</li>
          <li>◆ Concentrarte: Ganas +1 impulso.</li>
          <li>
            ◆ Prepararte: Al abandonar el campamento, obtén una bonificación de
            +1 si Emprendes un viaje.
          </li>
        </ul>
        <p>Fallo: No hallas descanso. Paga el precio.</p>
      </DropDown>
      <DropDown title={<h1>REVISAR TU EQUIPO</h1>}>
        <p>
          Cuando miras si tienes un objeto de utilidad en concreto, y tienes al
          menos +1 en suministros, tira + suministros.
        </p>
        <p>Éxito Total: Lo tienes. Ganas +1 en impulso.</p>
        <p>
          Éxito Parcial: Lo tienes, pero tus recursos disminuyen. Ganas +1 a
          impulso y -1 a suministros.
        </p>
        <p>
          Fallo: No lo tienes y la situación se vuelve todavía más peligrosa
          Paga el precio.
        </p>
      </DropDown>
      <DropDown title={<h1>VIAJAR</h1>}>
        <p>
          Cuando viajas por tierras desconocidas o peligrosas, primero determina
          el nivel de desafio de tu viaje.
        </p>
        <ul>
          <li>◆ Viaje problemático: 3 casillas para cada lugar de paso.</li>
          <li>◆ Viaje peligroso: 2 casillas por cada lugar de paso.</li>
          <li>◆ Viaje formidable: 1 casilla por cada lugar de paso.</li>
          <li>◆ Viaje extremo: 2 marcas por cada lugar de paso.</li>
          <li>
            ◆ Viaje épico: 1 marca por cada lugar de paso. Después, para cada
            tramo del viaje, tira + mente. Si partes de una comunidad con la que
            tienes un vínculo, suma +1 a la tirada inicial.
          </li>
        </ul>
        Éxito Total: Llegas a un lugar de paso en tu viaje. Si no conoces el
        lugar, imagina como es o Pregunta al Oráculo. A continuación, escoge
        una:
        <ul>
          <li> ◆ Haces un buen uso de tus recursos. Registra el progreso.</li>
          <li>
            ◆ Fuerzas la marcha: Registras el progreso y ganas +1 de impulso,
            pero pierdes -1 de suministros.
          </li>
        </ul>
        <p>
          Éxito Parcial: Alcanzas un lugar de paso. Registra el progreso, pero
          pierdes -1 de suministros.
        </p>
        <p>Fallo: Viaje interrumpido por un acontecimiento. Paga el precio.</p>
      </DropDown>
      <DropDown title={<h1>ALCANZAR TU DESTINO</h1>}>
        <h2>(M. PROGRESO)</h2>
        <p>
          Cuando tu viaje llega a su fin, tira los dados de desafío y compáralos
          con tu progreso. No tengas en cuenta el impulso.
        </p>
        <p>
          Éxito Total: La situación al llegar te es propicia. Escoge una: ◆ Haz
          otro movimiento ahora (no de progreso) y suma +1.
        </p>
        <ul>
          <li>◆ Ganas +1 de impulso.</li>
        </ul>
        <p>
          Éxito Parcial: Llegas a tu destino, pero te enfrentas a imprevistos en
          forma de peligros o complicaciones. Concrétalos o Pregunta al Oráculo.
        </p>
        <p>
          Fallo: O bien te has perdido sin remedio; o bien una vez allí se
          revela que no ha servido de nada llegar, o tu información sobre el
          destino no era correcta.
        </p>
        <p>
          Si el viaje continúa, elimina todo el progreso salvo una casilla (4
          marcas) y aumenta el nivel de desafío del viaje en uno (excepto si ya
          era épico).
        </p>
      </DropDown>
    </div>
  );
};

export default All;
