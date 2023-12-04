"use client";

import Plus from "/public/images/icons/icon-plus.svg";
import Minus from "/public/images/icons/icon-minus.svg";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(4);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count === 1) return;
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="flex items-center justify-between w-full px-4 pb-4 border-b-[1px] border-silver-gray">
      <Minus onClick={handleDecrement} className="cursor-pointer" />
      <p className="text-2xl/6 font-bold tracking-[-0.25px]">{count} people</p>
      <Plus onClick={handleIncrement} className="cursor-pointer" />
    </div>
  );
};

export default Counter;
