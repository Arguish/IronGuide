import React, { useState } from "react";
import ItemPicker from "../ItemPicker/ItemPicker";

const PickerGroup = ({ title, array, subtitles }) => {
  const [disable, setdisable] = useState(false);
  const [seed, setSeed] = useState(1);

  const reset = (ev) => {
    if (disable) {
      return;
    }
    ev.stopPropagation();
    setSeed(Math.random());
  };
  return (
    <div
      key={seed}
      onClick={(e) => reset(e)}
      className="text-center select-none border-2 bg-slate-600 rounded-2xl m-4 p-2"
    >
      <h1>{title}</h1>
      <div className="flex justify-center flex-wrap select-none">
        {array.map((a, i) => {
          return (
            <div
              className="flex flex-col flex-warp w-36 items-center m-1"
              key={i}
              onMouseEnter={() => {
                setdisable(true);
              }}
              onMouseLeave={() => {
                setdisable(false);
              }}
            >
              <ItemPicker array={a} title={subtitles[i]}></ItemPicker>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PickerGroup;
