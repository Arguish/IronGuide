import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/Global";
import ItemPicker from "../../Components/ItemPicker/ItemPicker";
import DropDown from "../../Components/DropDown/DropDown.jsx";
import FancyCard from "../../Components/FancyCard/FancyCard.jsx";
import MovCard from "../../Components/MovCard/MovCard.jsx";
import VSlider from "../../Components/VSlider/VSlider.jsx";
import Result from "../../Components/Result/Result.jsx";

const Sufrimiento = () => {
  const { Tablas } = useContext(GlobalContext);

  return (
    <VSlider>
      <MovCard
        title={<h1>SOPORTAR EL DAÑO</h1>}
        url="https://images.unsplash.com/photo-1516069677018-378515003435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGVzcGFkYSUyMHJvdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        description={
          <p>
            Cuando sufres daño, pierdes salud igual al nivel de desafío de tu
            oponente o tanta como sea apropiado según la situación. Si tu salud
            llega a 0, pierdes el sobrante en impulso en lugar de en salud.
            Luego tira + salud o + hierro, la que sea más alta.
          </p>
        }
        exito={
          <>
            <DropDown>
              <ul>
                <li>
                  No era para tanto: Si tu salud es mayor de 0, pierdes -1 de
                  impulso y a cambio ganas +1 de salud.
                </li>
                <li>El dolor es mi alimento: Ganas +1 de impulso.</li>
              </ul>
            </DropDown>
          </>
        }
        semi={
          <p>
            <strong>Éxito Parcial:</strong> sigues adelante.
          </p>
        }
        fallo={
          <>
            <p>
              <strong>Fallo:</strong> Pierdes -1 de impulso. Si tu salud es 0,
              elige entre marcar la debilidad "herido" o "mutilado" (si queda
              alguna por marcar) o tira en la siguiente tabla.
            </p>
            <ItemPicker array={Tablas.SoportarElDaño}></ItemPicker>
          </>
        }
      ></MovCard>
      <MovCard
        title={<h1>AFRONTAR LA MUERTE</h1>}
        description={
          <p>
            Cuando estás al borde de la muerte y vislumbras el más allá, tira
            +corazón.
          </p>
        }
        exito={
          <p>
            <strong>Éxito Total:</strong> La muerte te rechaza y te arroja de
            nuevo al mundo de los mortales.
          </p>
        }
        semi={
          <>
            <p>
              <strong>Éxito Parcial:</strong>
            </p>
            <DropDown>
              <ul>
                <li>
                  Mueres, pero no antes de hacer un noble sacrificio. Detalla
                  tus últimos momentos.
                </li>
                <li>
                  La muerte desea algo a cambio de tu vida. Concreta qué es lo
                  que quiere o Pregunta al Oráculo, y Jura por el hierro
                  (formidable o extremo) que completarás esa búsqueda. Si
                  rehúsas la búsqueda o fallas al Jurar por el hierro, estás
                  muerto. En caso contrario, regresas de entre los muertos con
                  una carga: marca "maldito". La única forma de eliminar la
                  debilidad "maldito" es completando la búsqueda.
                </li>
              </ul>
            </DropDown>
          </>
        }
        fallo={
          <p>
            <strong>Fallo:</strong> Estás muerto.
          </p>
        }
        url="https://images.unsplash.com/photo-1635490414352-f2636a36caae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHZpa2luZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      ></MovCard>
      <MovCard
        url="https://plus.unsplash.com/premium_photo-1661319012531-36ad82c66b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHx2aWtpbmdvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        title={<h1>TU COMPAÑERO SUFRE DAÑO</h1>}
        description={
          <p>
            Cuando tu compañero sufre daño, pierde salud igual a la cantidad de
            daño que le inflijan. Si la salud de tu compañero llega a 0, tú
            pierdes el sobrante en impulso. Luego, tira +corazón o +salud de tu
            compañero, lo que sea más alto.
          </p>
        }
        exito={
          <p>
            <strong>Éxito Total:</strong> Tu compañero se repone y gana +1 de
            salud.
          </p>
        }
        semi={
          <p>
            <strong>Éxito Parcial:</strong> Tu compañero se lastima. Si su salud
            es 0, no podrá ayudarte hasta que recupere al menos +1 de salud.
          </p>
        }
        fallo={
          <>
            <p>
              <strong>Fallo:</strong> Pierdes -1 de impulso. Si la salud de tu
              compañero es 0, queda fuera de combate y estará gravemente herido.
              Sin ayuda, morirá en una o dos horas.
            </p>
            <p>
              Cuando fallas, sacas un 1 en tu dado de acción y la salud de tu
              compañero es 0, el compañero muere. Ganas 1 punto de experiencia
              por cada capacidad activa que tuviera el recurso y, a
              continuación, lo pierdes.
            </p>
          </>
        }
      ></MovCard>
      <MovCard
        url="https://images.unsplash.com/photo-1562666938-671e1509e2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHNhbmdyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title={<h1>SOPORTAR EL ESTRÉS</h1>}
        description={
          <p>
            Cuando te enfrentas a la desesperación o sufres un choque emocional,
            pierdes entereza igual al nivel de desafío del oponente o tanta como
            sea adecuado a la situación. Si tu entereza llega a 0, pierdes el
            sobrante en impulso en vez de en entereza. Luego, tira +entereza o
            +corazón, lo que sea más alto.
          </p>
        }
        exito={
          <>
            <DropDown>
              <ul>
                <li>
                  No era para tanto: Si tu entereza es mayor de 0, pierdes -1 de
                  impulso y ganas +1 de entereza.
                </li>
                <li>Mi alimento es la oscuridad: Ganas +1 de impulso.</li>
              </ul>
            </DropDown>
          </>
        }
        semi={
          <p>
            <strong>Éxito Parcial:</strong> sigues adelante.
          </p>
        }
        fallo={
          <>
            <p>
              <strong>Fallo:</strong> Pierdes -1 de impulso. Si tu entereza es
              0, elige entre marcar la debilidad "conmocionado" o "corrompido"
              (si es que queda alguna sin marcar) o tira en la siguiente tabla.
            </p>
            <ItemPicker array={Tablas.SoportarElEstres}></ItemPicker>
          </>
        }
      ></MovCard>
      <MovCard
        url="https://images.unsplash.com/photo-1676192707495-d60b87979989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ4fHx2aWtpbmdvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        title={<h1>AFRONTAR LA DESOLACIÓN</h1>}
        description={
          <p>Cuando seas llevado al borde de la desolación, tira +corazón.</p>
        }
        exito={
          <p>
            <strong>Éxito Total:</strong> resistes y sigues adelante.
          </p>
        }
        semi={
          <>
            <DropDown>
              <ul>
                <li>
                  Te rompes por dentro. Pierdes las ganas de vivir o la cordura,
                  pero no antes de hacer un noble sacrificio. Detalla tus
                  últimos momentos.
                </li>
                <li>
                  Tienes una visión en la que se revela cómo sucederá algo
                  terrible. Concrétalo o Pregunta al Oráculo, y Jura por el
                  hierro (formidable o extremo) que lo impedirás. Si rechazas la
                  búsqueda o fallas al Jurar por el hierro, te pierdes para
                  siempre. En caso contrario, vuelves a tus cabales con una
                  carga: marca atormentado. La única forma de eliminar la
                  debilidad atormentado es completando la búsqueda.
                </li>
              </ul>
            </DropDown>
          </>
        }
        fallo={
          <p>
            <strong>Fallo:</strong> Sucumbes a la desesperación o el horror y te
            pierdes para siempre.
          </p>
        }
      ></MovCard>
      <FancyCard
        url="https://images.unsplash.com/photo-1633389254082-d63cc1d6aaf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpa2luZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        title={<h1>SIN SUMINISTROS</h1>}
      >
        <p>
          Cuando se agotan los suministros (se reducen a 0), todo el mundo marca
          la condición sin suministros. Si sufres más pérdidas de suministros
          mientras estás sin suministros, todos los PJ deben reducir su contador
          de salud, entereza o impulso (o una combinación de ellos) en esa misma
          cantidad (o una combinación equivalente) según las circunstancias.
        </p>
      </FancyCard>
      <FancyCard
        url="https://images.unsplash.com/photo-1622332515231-18bc53f7ad45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGJyb2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title={<h1>AFRONTAR UN CONTRATIEMPO</h1>}
      >
        <p>
          Cuando tu impulso está en su valor mínimo (-6) y sufres una pérdida de
          impulso adicional...
        </p>
        <DropDown>
          <li>
            Absorbe la pérdida de impulso con una combinación equivalente de
            salud, entereza o suministros, según sea apropiado a la situación.
          </li>
          <li>
            Determina un suceso o descubrimiento o Pregunta al Oráculo, que
            obstaculice tu progreso en una búsqueda, viaje o lucha actuales.
            Después, por cada punto de impulso perdido, borra una marca de
            progreso en el contador según...
            <DropDown title="nivel de desafío:">
              <ul>
                <li>Problemático: Borra 3 casillas completas.</li>
                <li>Peligroso: Borra 2 casillas completas.</li>
                <li>Formidable: Borra 1 casilla completa.</li>
                <li>Extremo: Borra 2 marcas.</li>
                <li>Épico: Borra 1 marca.</li>
              </ul>
            </DropDown>
          </li>
        </DropDown>
      </FancyCard>
    </VSlider>
  );
};

export default Sufrimiento;
