import React from "react";

const Landing = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center ">
      <h1 className="font-rune text-4xl w-4/5"> Proyecto en desarrollo</h1>
      <p className="w-4/5 my-2">
        Utiliza el menu arriba a la izquierda para desplazarte por la web.{" "}
      </p>
      <p className="w-4/5 my-2">
        La pagina aun puede contener errores, erratas y "juramentos por cumplir"
      </p>
      <p className="w-4/5 my-2">
        Se iran añadiendo Marcas de progreso cada poco tiempo, disculpa las
        molestias.
      </p>
      <p className="w-4/5 my-2">
        Si quieres añadir puntos de impulso al proyecto toda ayuda es bienvenida
        :D
      </p>
      <a className="mt-32" href="https://ko-fi.com/P5P6LEMUF" target="_blank">
        <div className="flex gap-2 items-center bg-indigo-700 rounded-full px-4">
          <img
            className="h-14"
            src="https://storage.ko-fi.com/cdn/brandasset/kofi_s_logo_nolabel.png?_gl=1*1gygfl8*_ga*ODYyMDI3NTUyLjE2ODc1MjQyNTk.*_ga_M13FZ7VQ2C*MTY4NzUyNDI1OC4xLjEuMTY4NzUyNTAwMy40Ni4wLjA."
            alt="Buy Me a Coffee at ko-fi.com"
          />
          <h1 className="font-rune text-2xl">Jurar Por el KoFi</h1>
        </div>
      </a>
    </div>
  );
};

export default Landing;
