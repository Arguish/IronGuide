import React from "react";
import DropDown from "../../Components/DropDown/DropDown.jsx";
import FancyCard from "../../Components/FancyCard/FancyCard.jsx";
import MovCard from "../../Components/MovCard/MovCard.jsx";
import VSlider from "../../Components/VSlider/VSlider.jsx";
import Result from "../../Components/Result/Result.jsx";

const Combate = () => {
  return (
    <VSlider>
      <MovCard
        title={<h1>ENTRAR EN LIZA</h1>}
        url="https://images.unsplash.com/photo-1627732922021-e73df99d192e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        description={
          <>
            <p>Al entrar en combate establece el nivel de cada oponente:</p>
            <DropDown title={"Oponente..."}>
              <ul>
                <li>
                  Oponente problemático: 3 prog. por daño. Inflije daño 1.
                </li>
                <li>Oponente peligroso: 2 prog. por daño. Inflije daño 2.</li>
                <li>Oponente formidable: 1 prog. por daño. Inflije daño 3.</li>
                <li>Oponente extremo: 2 marcas por daño. Inflije daño 4.</li>
                <li>Oponente épico: 1 marca por daño. Inflije daño 5.</li>
              </ul>
            </DropDown>
            <p>Luego, tira para determinar quién tiene el control. </p>
            <DropDown title={"Si..."}>
              <ul>
                <li>Te enfrentas a tu oponente: Tira + corazón.</li>
                <li>
                  Golpeas sin previo aviso o tomas una posición ventajosa si no
                  ha detectado tu presencia: Tira + sombra.
                </li>
                <li>Te han emboscado: Tira + mente.</li>
              </ul>
            </DropDown>
          </>
        }
        exito={
          <p>
            <strong>Éxito Total:</strong> Ganas +2 de impulso. Llevas la
            iniciativa.
          </p>
        }
        semi={
          <>
            <p>
              <strong>Éxito Parcial:</strong>:
            </p>
            <DropDown>
              <ul>
                <li>Afianzas tu posición: Ganas +2 de impulso.</li>
                <li>Te dispones a actuar: Iniciativa.</li>
              </ul>
            </DropDown>
          </>
        }
        fallo={
          <p>
            <strong>Fallo:</strong> Comienzas el combate en situación de
            desventaja. Pagas el precio. Tu oponente tiene la iniciativa.
          </p>
        }
      ></MovCard>
      <MovCard
        title={<h1>GOLPEAR (CON INICIATIVA)</h1>}
        url="https://images.unsplash.com/photo-1615672969026-ceaca023bc3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHx2aWtpbmdvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        description={
          <>
            <p>Cuando tienes la iniciativa y atacas...</p>
            <DropDown>
              <ul>
                <li>Si atacas cuerpo a cuerpo, tira + hierro.</li>
                <li>Si atacas a distancia, tira + filo.</li>
              </ul>
            </DropDown>
          </>
        }
        exito={
          <p>
            <strong>Éxito Total:</strong> Infliges +1 de daño. Conserva la
            iniciativa.
          </p>
        }
        semi={
          <p>
            <strong>Éxito Parcial:</strong> Infliges daño y pierdes la
            iniciativa.
          </p>
        }
        fallo={
          <p>
            <strong>Fallo:</strong> Tu ataque fracasa y debes pagar el precio.
            Tu enemigo lleva la iniciativa.
          </p>
        }
      ></MovCard>
      <MovCard
        title={<h1>CONTRATACAR (SIN INICIATIVA)</h1>}
        url="https://images.unsplash.com/photo-1615672968910-90f554a4d607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHZpa2luZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        description={
          <>
            <p>Cuando tu oponente lleva la iniciativa</p>
            <DropDown>
              <ul>
                <li>Si luchas cuerpo a cuerpo, tira + hierro.</li>
                <li>
                  Si intercambias proyectiles o disparas contra un objetivo que
                  avanza, tira + filo.
                </li>
              </ul>
            </DropDown>
          </>
        }
        exito={
          <>
            <p>
              <strong>Éxito Total:</strong> Infliges daño. Tienes la iniciativa
              y...
            </p>
            <DropDown>
              <ul>
                <li>Refuerzas tu posición: Ganas +1 de impulso.</li>
                <li>Encuentras un punto débil: Infliges +1 de daño.</li>
              </ul>
            </DropDown>
          </>
        }
        semi={
          <p>
            <strong>Éxito Parcial:</strong> Infliges daño, pero paga el precio.
            Tu rival tiene la iniciativa.
          </p>
        }
        fallo={
          <p>
            <strong>Fallo:</strong> Estás contra las cuerdas. Paga el precio. Tu
            rival tiene la iniciativa.
          </p>
        }
      ></MovCard>
      <FancyCard
        title={<h1>CAMBIAR LAS TORNAS</h1>}
        url="https://images.unsplash.com/photo-1636075203824-2bb51bdeb52a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGVzcGFkYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      >
        <p>
          Una vez por combate, cuando lo arriesgas todo, puedes robarle la
          iniciativa a tu oponente para hacer un movimiento (no de progreso). Al
          hacerlo suma +1. En caso de obtener un éxito (total o parcial), ganas
          +1 de impulso. Si fallas, sufres un resultado terrible. Paga el
          precio.
        </p>
      </FancyCard>
      <MovCard
        title={
          <h1>
            TERMINAR LA LUCHA <br />
            (M. PROGRESO)
          </h1>
        }
        url="https://images.unsplash.com/photo-1572204097183-e1ab140342ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGVzcGFkYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        description={
          <p>
            Cuando haces un movimiento para una acción decisiva y consigues
            éxito total, puedes decidir el resultado de la lucha. Tira los dados
            de desafío y compáralos con el contador de progreso de tu oponente.
            Ignora el impulso.
          </p>
        }
        exito={
          <p>
            <strong>Éxito Total:</strong> Tu oponente ya no está en la lucha.
            Puede huir, rendirse, quedar fuera de combate o morirse, según sea
            adecuado a la situación. Pregunta al Oráculo.
          </p>
        }
        semi={
          <>
            <p>
              <strong>Éxito Parcial:</strong> Como arriba, pero además...
            </p>
            <DropDown>
              <ul>
                <li>Es peor de lo que pensabas: Soporta el daño.</li>
                <li>La situación te desborda: Soportar el estrés.</li>
                <li>
                  Tu victoria es temporal: Aparece un nuevo peligro o rival, o
                  bien un peligro existente empeora.
                </li>
                <li>
                  Sufres daños colaterales: Algo de valor se pierde o se rompe,
                  o bien alguien importante para ti deberá pagar un coste.
                </li>
                <li>Pagarás por ello: Uno de tus objetivos se escapa.</li>
                <li>No caerá en el olvido: Alguien vendrá a vengarse.</li>
              </ul>
            </DropDown>
          </>
        }
        fallo={
          <p>
            <strong>Fallo:</strong> Has sido derrotado. Paga el precio.
          </p>
        }
      ></MovCard>
      <MovCard
        title={<h1>BATALLA SIMPLIFICADA</h1>}
        url="https://images.unsplash.com/photo-1615672968547-811b8e470371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHZpa2luZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        description={
          <>
            <p>
              Cuando luchas en una batalla y todo se difumina y acaba antes de
              tiempo, determina tu objetivo y tira.
            </p>
            <DropDown title="Si sobre todo...">
              <ul>
                <li>
                  Luchas a distancia o usas la velocidad y el terreno a tu
                  favor: Tira + filo.
                </li>
                <li>
                  Luchas apelando coraje, aliados o compañeros: Tira + corazón.
                </li>
                <li>Luchas cuerpo a cuerpo: Tira + hierro.</li>
                <li>Luchas con artimañas para confundir: Tira + sombra.</li>
                <li>Luchas recurriendo a la inteligencia: Tira + mente.</li>
              </ul>
            </DropDown>
          </>
        }
        exito={
          <p>
            <strong>Éxito Total:</strong> Logras tu objetivo sin condiciones.
            Ganas +2 de impulso.
          </p>
        }
        semi={
          <p>
            <strong>Éxito Parcial:</strong> Logras tu objetivo, pero no sin un
            coste. Paga el precio.
          </p>
        }
        fallo={
          <p>
            <strong>Fallo:</strong> Te derrotan y no logras conseguir tu
            objetivo. Paga el precio.
          </p>
        }
      ></MovCard>
      <FancyCard
        title={<h1>INICIATIVA Y OTROS MOVIMIENTOS EN COMBATE</h1>}
        url="https://images.unsplash.com/photo-1641575619187-c4b7de95d2d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHx2aWtpbmdvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      >
        <DropDown
          title={<p>Sigue estas pautas para seguir de tu iniciativa:</p>}
        >
          <ul>
            <Result exito>
              <li>
                Cuando logras un éxito total, ganas o retienes la iniciativa.
              </li>
            </Result>
            <Result semi fallo>
              <li>
                Cuando logras un éxito parcial, pierdes la iniciativa frente a
                tu enemigo.
              </li>
            </Result>
          </ul>
        </DropDown>
        <p>
          Cuando tienes iniciativa, tienes el control y toma acciones proactivas
          para lograr tus objetivos.
        </p>
        <DropDown title="Realiza movimientos como:">
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
            <li>
              Terminar la lucha para terminar la lucha contra este enemigo.
            </li>
          </ul>
        </DropDown>
        <p>
          Cuando tu enemigo tiene la iniciativa, tiene el control y realiza
          acciones que te obligan a reaccionar.
        </p>
        <DropDown title="Realiza movimientos como:">
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
        </DropDown>
        <p>Los siguientes movimientos también deben realizarse en combate...</p>
        <DropDown title="Según corresponda:">
          <ul>
            <li>
              Movimientos de sufrir, cuando te enfrentas a daños, trauma o falta
              de suministro.
            </li>
            <li>
              Paga el precio: Cuando se sufre el resultado de un movimiento.
            </li>
            <li>
              Pregunta al Oráculo: Cuando se hacen preguntas sobre eventos del
              combate o las intenciones y acciones de tus enemigos.
            </li>
          </ul>
        </DropDown>
      </FancyCard>
    </VSlider>
  );
};

export default Combate;
