import React from "react";
import MovCard from "../../Components/MovCard/MovCard";
import FancyCard from "../../Components/FancyCard/FancyCard";
import DropDown from "../../Components/DropDown/DropDown";

const Relacion = () => {
  return (
    <div
      className="h-screen flex-col gap-2"
      style={{
        overflow: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      <MovCard
        title={<h1>PERSUADIR</h1>}
        url={
          "https://images.unsplash.com/photo-1528319021065-884517564d7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHx2aWtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        }
        description={
          <div>
            <p>
              Cuando intentas persuadir a alguien de que haga algo, imagina cómo
              podrías lograrlo y tira.
            </p>
            <DropDown title={"Si..."}>
              <p>
                <strong>
                  Recurres a tu carisma, ofreces algo a cambio, convences o
                  tranquilizas:
                </strong>{" "}
                Tira + corazón (+1 si compartís vínculo).
              </p>
              <p>
                <strong>Amenazas/provocas:</strong> Tira + hierro.
              </p>
              <p>
                <strong>Mientes o engañas:</strong> Tira + sombra.
              </p>
            </DropDown>
          </div>
        }
        exito={
          <p>
            <strong>Éxito Total:</strong> Hace lo que quieres o comparte lo que
            sabe. Ganas +1 de impulso. Si aprovechas la coyuntura para Reunir
            Información haz ese movimiento ahora y suma +1.
          </p>
        }
        semi={
          <p>
            <strong>Éxito Parcial:</strong> Como arriba, pero te pide algo a
            cambio. Concreta qué es lo que quiere o pregunta al Oráculo.
          </p>
        }
        fallo={
          <p>
            <strong>Fallo:</strong> No cede o te exige algo muy costoso a
            cambio. Paga el precio.
          </p>
        }
      ></MovCard>

      <MovCard
        url="https://images.unsplash.com/photo-1661738357258-e3f2a56e59ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHx2aWtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        title={<h1>PASAR EL TIEMPO EN UNA COMUNIDAD</h1>}
        description={
          <p>
            Cuando pases tiempo en una comunidad buscando ayuda, tira +corazón.
            Si compartes un vínculo, añade +1.
          </p>
        }
        exito={
          <p>
            <strong>Éxito Total:</strong> Tú y cada aliado podéis elegir dos
            opciones de entre las categorías que se presentan más abajo. Quienes
            compartan vínculo con la comunidad pueden escoger tres.
          </p>
        }
        semi={
          <div>
            <p>
              <strong>Éxito Parcial:</strong> Podéis elegir solo una opción.
              Además, quienes compartan vínculo con la comunidad pueden escoger
              dos opciones.
            </p>
            <DropDown>
              <h2>Eliminar una condición</h2>
              <ul>
                <li>
                  <strong>Recuperarse:</strong> El personaje ya no está herido.
                  +1 Salud.
                </li>
                <li>
                  <strong>Reconfortarse:</strong> El personaje ya no está
                  conmocionado. +1 entereza.
                </li>
                <li>
                  <strong>Equiparse:</strong> El personaje ya no está sin
                  suministros. +1 suministros.
                </li>
              </ul>
              <h2>Recuperación</h2>
              <ul>
                <li>
                  <strong>Reponerse:</strong> Tú y tus compañeros ganáis +2 de
                  Salud.
                </li>
                <li>
                  <strong>Relacionarse:</strong> +2 de entereza.
                </li>
                <li>
                  <strong>Aprovisionarse:</strong> +2 suministros.
                </li>
                <li>
                  <strong>Planificar:</strong> +2 impulso.
                </li>
              </ul>
              <h2>Prestar ayuda</h2>
              <p>
                <strong>Iniciar una búsqueda:</strong> Establece lo que podría
                necesitar la comunidad o sus problemas. Pregunta al Oráculo. Si
                ayudas, usa Jurar por el hierro y suma +1 al hacerlo.
              </p>
              <p>
                Con un éxito, tenéis opción de volver a tirar + corazón en una
                de las acciones de "recuperación" elegidas. Los que tengan
                vínculo con la comunidad suman +1.
              </p>
              <p>
                <strong>Éxito Total:</strong> Ganas +2 más por esa acción.
              </p>
              <p>
                <strong>Éxito Parcial:</strong> Ganas +1 más por esa acción.
              </p>
              <p>
                <strong>Fallo:</strong> Va mal. Pierde todos los beneficios por
                esa acción.
              </p>
            </DropDown>
          </div>
        }
        fallo={
          <p>
            <strong>Fallo:</strong> No encuentras ayuda. Paga el precio.
          </p>
        }
      />

      <MovCard
        title={"TRAZAR EL CÍRCULO"}
        url={
          "https://images.pexels.com/photos/3408420/pexels-photo-3408420.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        description={
          <p>
            Cuando desafías a alguien a un duelo formal o aceptas un desafío,
            tira + corazón. Si compartes un vínculo con esta comunidad suma +1.
          </p>
        }
        exito={
          <p>
            <strong>Éxito Total:</strong> Ganas +1 de impulso. También puedes
            elegir hasta tres alardes. Ganas +1 de impulso por cada uno de
            ellos.
          </p>
        }
        semi={
          <div>
            <p>
              <strong>Éxito Parcial:</strong> Puedes elegir un alarde. En tal
              caso, ganas a cambio +1 de impulso.
            </p>
            <DropDown title={<h3>Alardes:</h3>}>
              <ul>
                <li>
                  <strong>Conceder el primer golpe:</strong> Tu oponente tiene
                  la iniciativa.
                </li>
                <li>
                  <strong>Soltar el hierro:</strong> No te beneficias de armas;
                  tu daño es 1.
                </li>
                <li>
                  <strong>Descubrirse:</strong> Sin escudo ni armadura. Daño del
                  oponente +1.
                </li>
                <li>
                  <strong>Derramar tu sangre:</strong> Soportar el daño (1 de
                  daño).
                </li>
                <li>
                  <strong>A muerte:</strong> El combate debe acabar con una
                  muerte.
                </li>
              </ul>
            </DropDown>
          </div>
        }
        fallo={
          <div>
            <p>
              <strong>Fallo:</strong> Comienzas el duelo en desventaja. Tu
              contrincante tiene la iniciativa. Paga el precio.
            </p>
            <p>
              A continuación, haz movimientos para resolver el combate. Si
              consigues vencer, puedes manifestar una exigencia legítima y tu
              adversario debe aceptarla o perder su honor y posición. Si
              rechazas el desafío, te rindes o te derrotan, será tu rival quien
              exprese su exigencia.
            </p>
          </div>
        }
      />
      <MovCard
        title={<h1>FORJAR UN VÍNCULO</h1>}
        url={
          "https://images.unsplash.com/photo-1546733522-e5fa3ab28605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx2aWtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        }
        description={
          <p>
            Si haces este movimiento después cuando pasas un tiempo considerable
            con una persona o en una comunidad, trabajas en equipo para afrontar
            dificultades o haces causa común sin importar los sacrificios,
            puedes intentar crear un vínculo. Si lo intentas, tira + corazón. Si
            cumples tu juramento en beneficio de la parte con la que intentas
            crear vínculo, puedes volver a tirar cualquier dado.
          </p>
        }
        exito={
          <>
            <p>
              <strong>Éxito Total:</strong> Anota el vínculo, haz una marca en
              el contador de progreso de tus vínculos y...
            </p>
            <DropDown title={"escoge una:"}>
              <ul>
                <li>Ganas +1 de entereza.</li>
                <li>Ganas +2 de impulso.</li>
              </ul>
            </DropDown>
          </>
        }
        semi={
          <p>
            <strong>Éxito Parcial:</strong> Te piden algo primero. Imagina qué
            podría ser o, si es necesario, pregunta al Oráculo. Dáselo o jura
            por el hierro. 1 marca en contador de vínculos. Si te niegas o
            fallas, paga el precio.
          </p>
        }
        fallo={
          <p>
            <strong>Fallo:</strong> Te rechazan. Paga el precio.
          </p>
        }
      />
      <MovCard
        title={<h1>PONER A PRUEBA UN VÍNCULO</h1>}
        url={
          "https://images.unsplash.com/photo-1541381776119-a301192909ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        }
        description={
          <p>
            Cuando las circunstancias, un conflicto o una traición ponen a
            prueba uno de tus vínculos, tira + corazón.
          </p>
        }
        exito={
          <>
            <p>
              <strong>Éxito Total:</strong> Las dificultades han reforzado el
              vínculo.
            </p>
            <DropDown title={"Elige una:"}>
              <ul>
                <li>Ganas +1 de entereza.</li>
                <li>Ganas +2 de impulso.</li>
              </ul>
            </DropDown>
          </>
        }
        semi={
          <p>
            <strong>Éxito Parcial:</strong> El vínculo se debilita y debes
            demostrar tu lealtad. Imagina qué podría necesitar la otra parte o
            pregunta al Oráculo, y hazlo. Jura por el hierro que lo harás. Si no
            estás dispuesto a hacerlo o fracasas, borra el vínculo y paga el
            precio.
          </p>
        }
        fallo={
          <div>
            <p>
              <strong>Fallo:</strong> Borra el vínculo y paga el precio.
            </p>
            <p>
              Si ya no tienes interés en mantener esta relación, borra el
              vínculo y paga el precio.
            </p>
          </div>
        }
      />
      <FancyCard
        title={<h1>AYUDAR A UN ALIADO</h1>}
        url={
          "https://images.unsplash.com/photo-1641575619171-46cfff1d9513?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHx2aWtpbmdvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        }
      >
        <p>
          Cuando creas una ventaja con el fin de ayudar a un aliado y obtienes
          un éxito (total o parcial), el aliado (en vez de ti) puede
          aprovecharse de los beneficios del movimiento. Si estáis en combate y
          obtuviste un éxito total, tanto tú como el personaje aliado lleváis la
          iniciativa.
        </p>
      </FancyCard>
      <FancyCard
        title={<h1>HACER UNA PAUSA</h1>}
        url={
          "https://images.unsplash.com/photo-1615672969032-45c313ae0a2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        }
      >
        <>
          <p>
            Cuando pases mucho tiempo recuperándote en un lugar seguro mientras
            una amenaza está activa...
          </p>
          <DropDown title={"realiza una de las siguientes acciones:"}>
            <ul>
              <li>Borra las condiciones marcadas.</li>
              <li>
                Establece tu salud, entereza, suministros y salud del compañero
                a sus valores máximos.
              </li>
              <li>
                Establece tu impulso a su valor de reinicio. Luego, para cada
                amenaza activa, avanza una amenaza.
              </li>
            </ul>
          </DropDown>
        </>
      </FancyCard>
      <MovCard
        title={
          <h1>
            ESCRIBIR TU EPÍLOGO <br /> (M. PROGRESO)
          </h1>
        }
        url={
          "https://images.unsplash.com/photo-1599147208154-5c0d508d47a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHZpa2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
        description={
          <p>
            Cuando te retiras y dejas atrás tu vida de aventuras, búsquedas y
            juramentos, responde: ¿Qué deseas que suceda? Después tira los dados
            de desafío y compara el resultado con tu total de progreso en
            vínculos. No tengas en cuenta el impulso en esta tirada. ¿Qué
            esperabas? ¿En qué consiste ese giro? Pregunta al Oráculo.
          </p>
        }
        exito={
          <p>
            <strong>Éxito Total:</strong> Las cosas suceden tal y como deseas.
          </p>
        }
        semi={
          <p>
            <strong>Éxito Parcial:</strong> Tu vida da un giro inesperado, pero
            no necesariamente a peor. Te encuentras pasando tus días con alguien
            o en un lugar que no esperabas. ¿En qué consiste ese giro? Pregunta
            al Oráculo.
          </p>
        }
        fallo={
          <p>
            <strong>Fallo:</strong> Tus temores se hacen realidad.
          </p>
        }
      />
    </div>
  );
};

export default Relacion;
