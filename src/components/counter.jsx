import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const clickBtn = (value) => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h2>Counter : {counter}</h2>
      <button onClick={clickBtn}>Add 1</button>
    </div>
  );
};
