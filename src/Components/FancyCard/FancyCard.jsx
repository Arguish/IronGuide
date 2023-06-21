import React from "react";

const FancyCard = ({ title = "", url = "", pos = "50% 50%", children }) => {
  return (
    <div
      style={{
        backgroundPosition: `${pos}`,
        backgroundImage: `
        linear-gradient(0deg, #000, Transparent 25%, Transparent 75%, #000),            
        linear-gradient(90deg, #000, Transparent 33%, Transparent 66%, #000),            
        url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=""
    >
      <div
        style={{
          scrollSnapAlign: "start",
        }}
        className="m-4 p-2 rounded-lg h-screen flex flex-col justify-between "
      >
        <div>
          <div className="font-rune self-center text-4xl text-center">
            {title}
          </div>
          <p className="self-center text-center text-xs">{title}</p>
        </div>
        <div className=" self-end text-right drop-shadow bg-slate-400/60 p-2 rounded-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FancyCard;
