import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementOne = (value) => {
    setCounter(counter + 1);
  };
  const decrementOne = (value) => {
    setCounter(counter - 1);
  };
  const double = (value) => {
    setCounter(counter * 2);
  };
  return (
    <div>
      <h2>Counter : {counter}</h2>
      <button onClick={incrementOne}>Add 1</button>
      <button onClick={decrementOne}>Reduce 1</button>
      <button onClick={double}>Double</button>
    </div>
  );
};
