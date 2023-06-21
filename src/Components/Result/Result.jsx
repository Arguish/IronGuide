import React from "react";

const Result = ({ children, fallo = false, exito = false, semi = false }) => {
  return (
    <div className="flex justify-between my-2 bg-slate-500 rounded-2xl drop-shadow-md">
      {fallo && (
        <div className="flex gap-1 items-start">
          <p className="bg-red-500 rounded-full">X</p>
          <p className="bg-red-500 rounded-full">X</p>
        </div>
      )}
      {semi && (
        <div className="flex gap-1 items-start">
          <p className="bg-green-500 rounded-full">O</p>
          <p className="bg-red-500 rounded-full">X</p>
        </div>
      )}
      {exito && (
        <div className="flex gap-1 items-start">
          <p className="bg-green-500 rounded-full">X</p>
          <p className="bg-green-500 rounded-full">X</p>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Result;
