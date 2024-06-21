import React, { useState } from "react";
import { GiHornedHelm } from "react-icons/gi";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

function App() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  // Add task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      const addTask = {
        id: Math.floor(Math.random() * 1000),
        text: input,
        completed: false,
      };
      setTask([...task, addTask]);
      setInput("");
    }
  };

  // Delete task
  const deleteTask = (id) => {
    const newTask = task.filter((task) => task.id !== id);
    setTask(newTask);
  };

  // Toggle task completion
  const toggleTask = (id) => {
    const newTask = task.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTask(newTask);
  };

  return (
    <div className="app d-flex ">
      <div className="container ">
        <h1>
          <GiHornedHelm />
          PowerList
        </h1>

        <form onSubmit={handleSubmit}>
          <AiOutlinePlus />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a text"
          />
        </form>

        <div>
          {task.map((task) => (
            <div key={task.id}>
              <p
                style={{ textDecoration: task.completed ? "line-through" : "" }}
              >
                {task.text}{" "}
                <button onClick={() => deleteTask(task.id)} className="primary">
                  <AiOutlineClose style={{ color: "red" }} />
                </button>
                <button onClick={() => toggleTask(task.id)}>
                  {task.completed ? "Undo" : "Complete"}
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
