import React, { useContext } from "react";
import { GlobalContext } from "../../Context/Global";

import ItemPicker from "../../Components/ItemPicker/ItemPicker";
import Oracle from "../../Components/Oracle/Oracle.jsx";

const Destino = () => {
  const { Tablas } = useContext(GlobalContext);
  return (
    <>
      <div>
        <h1>Pagar el Precio</h1>
        <p>Cuando sufres las consecuencias de un movimiento elige una:</p>
        <ul>
          <li>◆ Haz que suceda el resultado negativo más obvio.</li>
          <li>
            ◆ Determina dos posibles resultados negativos. Establece uno
            "probable" y Pregunta al Oráculo usando la tabla de si/no. Con un
            "sí" ocurre el resultado probable. En caso contrario, el otro.
          </li>
          <li>
            ◆ Tira en la tabla siguiente si resulta dificil interpretar el
            resultado para la situación actual, vuelve a tirar.
          </li>
        </ul>
        <ItemPicker array={Tablas.PagarElPrecio}></ItemPicker>
      </div>
      <div>
        <h1>Pregunta al Oraculo</h1>
        <p>
          Cuando buscas dar respuesta a una pregunta, descubrir detalles del
          mundo, determinar cómo reaccionan otros personajes o desencadenar
          eventos o encuentros, elige una:
        </p>
        <ul>
          <li>
            ◆ Decídelo tú: Llega a una conclusión basándote en el resultado más
            obvio e interesante.
          </li>
          <li>◆ Inspírate: Haz una lluvia de ideas o genéralo al azar.</li>
          <li>
            ◆ Haz una pregunta de sí/no: Decide cuáles son las probabilidades de
            que la respuesta sea "sí" y tira en la tabla de abajo.
          </li>
          <li>
            ◆ Escoge entre dos opciones: Piensa dos opciones establece una como
            "probable" y tira en la tabla de abajo para ver si es verdad. Si no
            lo es, la otra es la cierta.
          </li>
        </ul>
        <Oracle></Oracle>
      </div>
    </>
  );
};

export default Destino;
