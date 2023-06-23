import React, { useState } from "react";

const ItemPicker = ({ array, title }) => {
  const [maxNum] = useState(array[array.length - 1].tirada);

  const dice = (num) => {
    return Math.ceil(Math.random() * num);
  };

  const desc = (num, array) => {
    if (num <= array[0].tirada) {
      return array[0].resultado;
    }
    const result = array.filter((a) => a.tirada < num).reverse();
    return result[0].resultado;
  };

  const [value, setvalue] = useState(dice(maxNum));
  const [description, setdescription] = useState(desc(value, array));

  const reroll = () => {
    const roll = dice(maxNum);
    setvalue(roll);
    setdescription(desc(roll, array));
  };

  return (
    <div className="flex flex-col justify-center w-full text-center rounded-2xl border-2 border-indigo-400 bg-indigo-300">
      <h1>{title}</h1>
      <div
        className=" p-2 w-full h-32 rounded-2xl border-t-2 border-indigo-900 bg-indigo-900 flex justify-center items-center select-none"
        onClick={() => reroll()}
      >
        <h1 className="my-2 mx-6 text-2xl">{value}</h1>
        <p className=" my-2 ">{description}</p>
      </div>
    </div>
  );
};

export default ItemPicker;
