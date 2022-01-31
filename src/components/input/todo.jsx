import { useState } from "react";
import { TaskItems } from "./taskItems";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleAdd = () => {
    const payload = {
      title: query,
      status: false,
    };
    let newTask = [...tasks, payload];
    setTasks(newTask);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={query}
          placeholder="Enter todo"
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add todo</button>
        <div>
          {tasks.map((item, index) => {
            return <TaskItems color={index%2===0?"blue":"red"} title={item.title} status={item.status}/>
          })}
        </div>
      </div>
    </>
  );
};
