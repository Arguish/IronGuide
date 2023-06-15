import React, { useState } from "react";

const Oracle = () => {
  const dice = (num) => {
    return Math.ceil(Math.random() * num);
  };

  const [yesNo, setyesNo] = useState("?");
  const [limit, setlimit] = useState(0);
  const [roll, setroll] = useState(dice(100));

  const reroll = () => {
    roll > limit ? setyesNo("SI") : setyesNo("NO");
    setroll(dice(100));
  };

  return (
    <div className="flex justify-center">
      <div
        className="m-4 p-2 w-fit h-32 rounded border-2 border-indigo-400 bg-indigo-200 flex flex-col justify-center items-center select-none transition-all duration-500 active:bg-red-400"
        onClick={() => {
          reroll();
        }}
        onTouchStart={reroll}
      >
        <label htmlFor="lang">Probablilidades: </label>

        <select
          name="lenguajes"
          id="lang"
          onChange={(e) => setlimit(e.target.value)}
          defaultValue={26}
        >
          <option value={11}>Casi Seguro</option>
          <option value={26}>Probable</option>
          <option value={51}>50/50</option>
          <option value={76}>Improbable</option>
          <option value={91}>Raro</option>
        </select>
        <h1 className="text-7xl">{yesNo}</h1>
      </div>
    </div>
  );
};

export default Oracle;
