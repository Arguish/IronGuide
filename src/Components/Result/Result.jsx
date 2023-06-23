import React from "react";

const Result = ({ children, fallo = false, exito = false, semi = false }) => {
  return (
    <div className="flex justify-between my-2 bg-slate-500 rounded-2xl drop-shadow-md gap-2">
      {fallo && (
        <div className="flex flex-col gap-1 justify-start font-rune ">
          <p className="bg-red-500 rounded-full px-2">X</p>
          <p className="bg-red-500 rounded-full px-2">X</p>
        </div>
      )}
      {semi && (
        <div className="flex flex-col gap-1 justify-start font-rune ">
          <p className="bg-green-500 rounded-full px-2">O</p>
          <p className="bg-red-500 rounded-full px-2">X</p>
        </div>
      )}
      {exito && (
        <div className="flex flex-col gap-1 justify-start font-rune ">
          <p className="bg-green-500 rounded-full px-2">O</p>
          <p className="bg-green-500 rounded-full px-2">O</p>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Result;
