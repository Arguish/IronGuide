import React from "react";

const VSlider = ({ children }) => {
  return (
    <div
      className="h-screen flex-col gap-2"
      style={{
        overflow: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      {children}
    </div>
  );
};

export default VSlider;
