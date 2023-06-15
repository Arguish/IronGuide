import React from "react";

const Combate = () => {
  return (
    <div>
      <h1>ENTRAR EN LIZA</h1>
      <p>Al entrar en combate establece el nivel de cada oponente:</p>
      <ul>
        <li>Oponente problemático: 3 prog. por daño. Inflije daño 1.</li>
        <li>Oponente peligroso: 2 prog. por daño. Inflije daño 2.</li>
        <li>Oponente formidable: 1 prog. por daño. Inflije daño 3.</li>
        <li>Oponente extremo: 2 marcas por daño. Inflije daño 4.</li>
        <li>Oponente épico: 1 marca por daño. Inflije daño 5.</li>
      </ul>
      <p>Luego, tira para determinar quién tiene el control. Si...</p>
      <ul>
        <li>Te enfrentas a tu oponente: Tira + corazón.</li>
        <li>
          Golpeas sin previo aviso o tomas una posición ventajosa si no ha
          detectado tu presencia: Tira + sombra.
        </li>
        <li>Te han emboscado: Tira + mente.</li>
      </ul>
      <p>
        <strong>Éxito Total:</strong> Ganas +2 de impulso. Llevas la iniciativa.
      </p>
      <p>
        <strong>Éxito Parcial:</strong> Elige una:
      </p>
      <ul>
        <li>Afianzas tu posición: Ganas +2 de impulso.</li>
        <li>Te dispones a actuar: Iniciativa.</li>
      </ul>
      <p>
        <strong>Fallo:</strong> Comienzas el combate en situación de desventaja.
        Pagas el precio. Tu oponente tiene la iniciativa.
      </p>

      <h1>GOLPEAR (CON INICIATIVA)</h1>
      <p>Cuando tienes la iniciativa y atacas, escoge una:</p>
      <ul>
        <li>Si atacas cuerpo a cuerpo, tira + hierro.</li>
        <li>Si atacas a distancia, tira + filo.</li>
      </ul>
      <p>
        <strong>Éxito Total:</strong> Infliges +1 de daño. Conserva la
        iniciativa.
      </p>
      <p>
        <strong>Éxito Parcial:</strong> Infliges daño y pierdes la iniciativa.
      </p>
      <p>
        <strong>Fallo:</strong> Tu ataque fracasa y debes pagar el precio. Tu
        enemigo lleva la iniciativa.
      </p>

      <h1>CONTRATACAR (SIN INICIATIVA)</h1>
      <p>Cuando tu oponente lleva la iniciativa, escoge uno:</p>
      <ul>
        <li>Si luchas cuerpo a cuerpo, tira + hierro.</li>
        <li>
          Si intercambias proyectiles o disparas contra un objetivo que avanza,
          tira + filo.
        </li>
      </ul>
      <p>
        <strong>Éxito Total:</strong> Infliges daño y elige una. Tienes la
        iniciativa.
      </p>
      <ul>
        <li>Refuerzas tu posición: Ganas +1 de impulso.</li>
        <li>Encuentras un punto débil: Infliges +1 de daño.</li>
      </ul>
      <p>
        <strong>Éxito Parcial:</strong> Infliges daño, pero paga el precio. Tu
        rival tiene la iniciativa.
      </p>
      <p>
        <strong>Fallo:</strong> Estás contra las cuerdas. Paga el precio. Tu
        rival tiene la iniciativa.
      </p>

      <h1>CAMBIAR LAS TORNAS</h1>
      <p>
        Una vez por combate, cuando lo arriesgas todo, puedes robarle la
        iniciativa a tu oponente para hacer un movimiento (no de progreso). Al
        hacerlo suma +1. En caso de obtener un éxito (total o parcial), ganas +1
        de impulso. Si fallas, sufres un resultado terrible. Paga el precio.
      </p>

      <h1>TERMINAR LA LUCHA (M. PROGRESO)</h1>
      <p>
        Cuando haces un movimiento para una acción decisiva y consigues éxito
        total, puedes decidir el resultado de la lucha. Tira los dados de
        desafío y compáralos con el contador de progreso de tu oponente. Ignora
        el impulso.
      </p>
      <p>
        <strong>Éxito Total:</strong> Tu oponente ya no está en la lucha. Puede
        huir, rendirse, quedar fuera de combate o morirse, según sea adecuado a
        la situación. Pregunta al Oráculo.
      </p>
      <p>
        <strong>Éxito Parcial:</strong> Como arriba, pero además debes escoger
        una:
      </p>
      <ul>
        <li>Es peor de lo que pensabas: Soporta el daño.</li>
        <li>La situación te desborda: Soportar el estrés.</li>
        <li>
          Tu victoria es temporal: Aparece un nuevo peligro o rival, o bien un
          peligro existente empeora.
        </li>
        <li>
          Sufres daños colaterales: Algo de valor se pierde o se rompe, o bien
          alguien importante para ti deberá pagar un coste.
        </li>
        <li>Pagarás por ello: Uno de tus objetivos se escapa.</li>
        <li>No caerá en el olvido: Alguien vendrá a vengarse.</li>
      </ul>
      <p>
        <strong>Fallo:</strong> Has sido derrotado. Paga el precio.
      </p>
      <h1>BATALLA SIMPLIFICADA</h1>
      <p>
        Cuando luchas en una batalla y todo se difumina y acaba antes de tiempo,
        determina tu objetivo y tira. Si sobre todo...
      </p>
      <ul>
        <li>
          Luchas a distancia o usas la velocidad y el terreno a tu favor: Tira +
          filo.
        </li>
        <li>Luchas apelando coraje, aliados o compañeros: Tira + corazón.</li>
        <li>Luchas cuerpo a cuerpo: Tira + hierro.</li>
        <li>Luchas con artimañas para confundir: Tira + sombra.</li>
        <li>Luchas recurriendo a la inteligencia: Tira + mente.</li>
      </ul>
      <p>
        <strong>Éxito Total:</strong> Logras tu objetivo sin condiciones. Ganas
        +2 de impulso.
      </p>
      <p>
        <strong>Éxito Parcial:</strong> Logras tu objetivo, pero no sin un
        coste. Paga el precio.
      </p>
      <p>
        <strong>Fallo:</strong> Te derrotan y no logras conseguir tu objetivo.
        Paga el precio.
      </p>

      <h1>MANEJAR INICIATIVA Y OTROS MOVIMIENTOS PARA HACER EN COMBATE</h1>
      <p>Sigue estas pautas para seguir de tu iniciativa:</p>
      <ul>
        <li>Cuando logras un éxito total, ganas o retienes la iniciativa.</li>
        <li>
          Cuando logras un éxito parcial, pierdes la iniciativa frente a tu
          enemigo.
        </li>
      </ul>
      <p>
        Cuando tienes iniciativa, tienes el control y toma acciones proactivas
        para lograr tus objetivos. Realiza movimientos como:
      </p>
      <ul>
        <li>Golpear para atacar.</li>
        <li>
          Crear una ventaja para burlar o manipular a tu enemigo, o para
          preparar otro movimiento.
        </li>
        <li>
          Afrontar el peligro para superar un obstáculo, evitar un riesgo o
          escapar (sin combatir).
        </li>
        <li>Ayudar a un aliado para darle una ventaja a tu aliado.</li>
        <li>Persuadir a obligar a tu enemigo a que abandone la lucha.</li>
        <li>Terminar la lucha para terminar la lucha contra este enemigo.</li>
      </ul>
      <p>
        Cuando tu enemigo tiene la iniciativa, tiene el control y realiza
        acciones que te obligan a reaccionar. Realiza movimientos como:
      </p>
      <ul>
        <li>Contratacar para contraatacar.</li>
        <li>
          Afrontar el peligro para concentrarte en defender, colocarte en
          posición, resistir la acción de tu enemigo o huir.
        </li>
        <li>Persuadir a tu enemigo de que acepte tu rendición.</li>
        <li>
          Cambiar las tornas (una vez por pelea) para robar la iniciativa.
        </li>
      </ul>
      <p>
        Los siguientes movimientos también deben realizarse en combate, según
        corresponda:
      </p>
      <ul>
        <li>
          Movimientos de sufrir, cuando te enfrentas a daños, trauma o falta de
          suministro.
        </li>
        <li>Paga el precio: Cuando se sufre el resultado de un movimiento.</li>
        <li>
          Pregunta al Oráculo: Cuando se hacen preguntas sobre eventos del
          combate o las intenciones y acciones de tus enemigos.
        </li>
      </ul>
    </div>
  );
};

export default Combate;
