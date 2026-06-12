import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if(task.trim()){
      setTasks([...tasks,{text:task,completed:false}]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i)=>i!==index));
  };

  return (
    <div>
      <h2>To-Do List</h2>

      <input
        type="text"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t,index)=>(
          <li key={index}>
            <span
              onClick={()=>toggleTask(index)}
              style={{
                textDecoration:t.completed?"line-through":"none",
                cursor:"pointer"
              }}
            >
              {t.text}
            </span>

            <button onClick={()=>deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;