import React from "react";
import Todo from "./components/Todo";
import Notes from "./components/Notes";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>To-Do + Notes App</h1>

      <div className="section">
        <Todo />
      </div>

      <div className="section">
        <Notes />
      </div>
    </div>
  );
}

export default App;