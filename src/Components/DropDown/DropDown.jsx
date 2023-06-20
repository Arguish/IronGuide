import React, { useState } from "react";

const DropDown = ({ title, children }) => {
  const [show, setshow] = useState(false);
  const toggle = () => setshow(!show);

  return (
    <div
      className={` drop-shadow-lg
    ${show ? "w-full m-2" : "w-2/3 m-0"}
    `}
    >
      <div
        onClick={toggle}
        className={`flex justify-between p-2 pb-2 bg-slate-500 
        ${show ? "rounded-t-2xl" : "rounded-2xl"}`}
      >
        <div>{title}</div>
        <h1>{show ? "🔼" : "🔽"}</h1>
      </div>
      <div
        className={` overflow-hidden p-2 bg-slate-300 transition duration-500 rounded-b-2xl
        ${show ? "h-auto p-2" : "h-0 p-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default DropDown;
