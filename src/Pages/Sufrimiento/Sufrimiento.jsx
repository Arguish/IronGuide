import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/Global";
import ItemPicker from "../../Components/ItemPicker/ItemPicker";

const Sufrimiento = () => {
  const { Tablas } = useContext(GlobalContext);

  return (
    <div>
      <h1>SOPORTAR EL DAÑO</h1>
      <p>
        Cuando sufres daño, pierdes salud igual al nivel de desafío de tu
        oponente o tanta como sea apropiado según la situación. Si tu salud
        llega a 0, pierdes el sobrante en impulso en lugar de en salud. Luego
        tira + salud o + hierro, la que sea más alta.
      </p>
      <p>
        <strong>Éxito Total:</strong> elige una:
      </p>
      <ul>
        <li>
          No era para tanto: Si tu salud es mayor de 0, pierdes -1 de impulso y
          a cambio ganas +1 de salud.
        </li>
        <li>El dolor es mi alimento: Ganas +1 de impulso.</li>
      </ul>
      <p>
        <strong>Éxito Parcial:</strong> sigues adelante.
      </p>
      <p>
        <strong>Fallo:</strong> Pierdes -1 de impulso. Si tu salud es 0, elige
        entre marcar la debilidad "herido" o "mutilado" (si queda alguna por
        marcar) o tira en la siguiente tabla.
      </p>
      <ItemPicker array={Tablas.SoportarElDaño}></ItemPicker>
      <h1>AFRONTAR LA MUERTE</h1>
      <p>
        Cuando estás al borde de la muerte y vislumbras el más allá, tira
        +corazón.
      </p>
      <p>
        <strong>Éxito Total:</strong> La muerte te rechaza y te arroja de nuevo
        al mundo de los mortales.
      </p>
      <p>
        <strong>Éxito Parcial:</strong> elige una:
      </p>
      <ul>
        <li>
          Mueres, pero no antes de hacer un noble sacrificio. Detalla tus
          últimos momentos.
        </li>
        <li>
          La muerte desea algo a cambio de tu vida. Concreta qué es lo que
          quiere o Pregunta al Oráculo, y Jura por el hierro (formidable o
          extremo) que completarás esa búsqueda. Si rehúsas la búsqueda o fallas
          al Jurar por el hierro, estás muerto. En caso contrario, regresas de
          entre los muertos con una carga: marca "maldito". La única forma de
          eliminar la debilidad "maldito" es completando la búsqueda.
        </li>
      </ul>
      <p>
        <strong>Fallo:</strong> Estás muerto.
      </p>
      <h1>TU COMPAÑERO SUFRE DAÑO</h1>
      <p>
        Cuando tu compañero sufre daño, pierde salud igual a la cantidad de daño
        que le inflijan. Si la salud de tu compañero llega a 0, tú pierdes el
        sobrante en impulso. Luego, tira +corazón o +salud de tu compañero, lo
        que sea más alto.
      </p>
      <p>
        <strong>Éxito Total:</strong> Tu compañero se repone y gana +1 de salud.
      </p>
      <p>
        <strong>Éxito Parcial:</strong> Tu compañero se lastima. Si su salud es
        0, no podrá ayudarte hasta que recupere al menos +1 de salud.
      </p>
      <p>
        <strong>Fallo:</strong> Pierdes -1 de impulso. Si la salud de tu
        compañero es 0, queda fuera de combate y estará gravemente herido. Sin
        ayuda, morirá en una o dos horas.
      </p>
      <p>
        Cuando fallas, sacas un 1 en tu dado de acción y la salud de tu
        compañero es 0, el compañero muere. Ganas 1 punto de experiencia por
        cada capacidad activa que tuviera el recurso y, a continuación, lo
        pierdes.
      </p>
      <h1>SOPORTAR EL ESTRÉS</h1>
      <p>
        Cuando te enfrentas a la desesperación o sufres un choque emocional,
        pierdes entereza igual al nivel de desafío del oponente o tanta como sea
        adecuado a la situación. Si tu entereza llega a 0, pierdes el sobrante
        en impulso en vez de en entereza. Luego, tira +entereza o +corazón, lo
        que sea más alto.
      </p>
      <p>
        <strong>Éxito Total:</strong> elige uno:
      </p>
      <ul>
        <li>
          No era para tanto: Si tu entereza es mayor de 0, pierdes -1 de impulso
          y ganas +1 de entereza.
        </li>
        <li>Mi alimento es la oscuridad: Ganas +1 de impulso.</li>
      </ul>
      <p>
        <strong>Éxito Parcial:</strong> sigues adelante.
      </p>
      <p>
        <strong>Fallo:</strong> Pierdes -1 de impulso. Si tu entereza es 0,
        elige entre marcar la debilidad "conmocionado" o "corrompido" (si es que
        queda alguna sin marcar) o tira en la siguiente tabla.
      </p>
      <ItemPicker array={Tablas.SoportarElEstres}></ItemPicker>

      <h1>AFRONTAR LA DESOLACIÓN</h1>
      <p>Cuando seas llevado al borde de la desolación, tira +corazón.</p>
      <p>
        <strong>Éxito Total:</strong> resistes y sigues adelante.
      </p>
      <p>
        <strong>Éxito Parcial:</strong> elige uno:
      </p>
      <ul>
        <li>
          Te rompes por dentro. Pierdes las ganas de vivir o la cordura, pero no
          antes de hacer un noble sacrificio. Detalla tus últimos momentos.
        </li>
        <li>
          Tienes una visión en la que se revela cómo sucederá algo terrible.
          Concrétalo o Pregunta al Oráculo, y Jura por el hierro (formidable o
          extremo) que lo impedirás. Si rechazas la búsqueda o fallas al Jurar
          por el hierro, te pierdes para siempre. En caso contrario, vuelves a
          tus cabales con una carga: marca atormentado. La única forma de
          eliminar la debilidad atormentado es completando la búsqueda.
        </li>
      </ul>
      <p>
        <strong>Fallo:</strong> Sucumbes a la desesperación o el horror y te
        pierdes para siempre.
      </p>
      <h1>QUEDAR SIN SUMINISTROS</h1>
      <p>
        Cuando se agotan los suministros (se reducen a 0), todo el mundo marca
        la condición sin suministros. Si sufres más pérdidas de suministros
        mientras estás sin suministros, todos los PJ deben reducir su contador
        de salud, entereza o impulso (o una combinación de ellos) en esa misma
        cantidad (o una combinación equivalente) según las circunstancias.
      </p>
      <h1>AFRONTAR UN CONTRATIEMPO</h1>
      <p>
        Cuando tu impulso está en su valor mínimo (-6) y sufres una pérdida de
        impulso adicional, elige una:
      </p>
      <ul>
        <li>
          Absorbe la pérdida de impulso con una combinación equivalente de
          salud, entereza o suministros, según sea apropiado a la situación.
        </li>
        <li>
          Determina un suceso o descubrimiento o Pregunta al Oráculo, que
          obstaculice tu progreso en una búsqueda, viaje o lucha actuales.
          Después, por cada punto de impulso perdido, borra una marca de
          progreso en el contador según nivel de desafío:
          <ul>
            <li>Problemático: Borra 3 casillas completas.</li>
            <li>Peligroso: Borra 2 casillas completas.</li>
            <li>Formidable: Borra 1 casilla completa.</li>
            <li>Extremo: Borra 2 marcas.</li>
            <li>Épico: Borra 1 marca.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sufrimiento;
