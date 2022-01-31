import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementOne = (value) => {
    setCounter(counter + value);
  };

  const decrementOne = (value) => {
    setCounter(counter + value);
  };
  const double = () => {
    setCounter(counter * 2);
  };
  return (
    <div>
      <h2>Counter : {counter}</h2>
      <button onClick={() => incrementOne(1)}>Add 1</button>
      <button onClick={() => decrementOne(-1)}>Reduce 1</button>
      <button onClick={double}>Double</button>
    </div>
  );
};
