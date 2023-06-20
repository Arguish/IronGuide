import React from "react";

const FancyCard = ({ title = "", url = "", pos = "50% 50%", children }) => {
  return (
    <div
      style={{
        backgroundPosition: `${pos}`,
        filter: "grayscale(100%)",
        backgroundImage: `radial-gradient(transparent 0%, #000 75%),
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
        className="m-4 p-2 rounded-lg h-screen flex flex-col justify-between bg-slate-400/60 "
      >
        <div>{title}</div>
        <div className=" self-end text-right">{children}</div>
      </div>
    </div>
  );
};

export default FancyCard;
