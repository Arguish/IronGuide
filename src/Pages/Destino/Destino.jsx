import React, { useContext } from "react";
import { GlobalContext } from "../../Context/Global";

import ItemPicker from "../../Components/ItemPicker/ItemPicker";
import Oracle from "../../Components/Oracle/Oracle.jsx";
import VSlider from "../../Components/VSlider/VSlider.jsx";
import DropDown from "../../Components/DropDown/DropDown.jsx";
import FancyCard from "../../Components/FancyCard/FancyCard.jsx";

const Destino = () => {
  const { Tablas } = useContext(GlobalContext);
  return (
    <VSlider>
      <FancyCard
        title={"Pagar el Precio"}
        url={
          "https://images.pexels.com/photos/10178535/pexels-photo-10178535.jpeg?auto=compress"
        }
      >
        <p>Cuando sufres las consecuencias de un movimiento...</p>
        <DropDown title={"elige una:"}>
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
        </DropDown>
      </FancyCard>
      <FancyCard
        title="Preguntar al Oraculo"
        url="https://images.unsplash.com/photo-1618329075618-0d0c6ee9807b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpa2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      >
        <div>
          <p>
            Cuando buscas dar respuesta a una pregunta, descubrir detalles del
            mundo, determinar cómo reaccionan otros personajes o desencadenar
            eventos o encuentros...
          </p>
          <DropDown title={"elige una:"}>
            <ul>
              <li>
                ◆ Decídelo tú: Llega a una conclusión basándote en el resultado
                más obvio e interesante.
              </li>
              <li>◆ Inspírate: Haz una lluvia de ideas o genéralo al azar.</li>
              <li>
                ◆ Haz una pregunta de sí/no: Decide cuáles son las
                probabilidades de que la respuesta sea "sí" y tira en la tabla
                de abajo.
              </li>
              <li>
                ◆ Escoge entre dos opciones: Piensa dos opciones establece una
                como "probable" y tira en la tabla de abajo para ver si es
                verdad. Si no lo es, la otra es la cierta.
              </li>
            </ul>
            <Oracle></Oracle>
          </DropDown>
        </div>
      </FancyCard>
    </VSlider>
  );
};

export default Destino;
