import './App.css'
import { useState, useEffect } from 'react';
import TodoList from './TodoList';

function App() {

  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([{ id: 1, task: "complete react course", date: "2024-06-30", checked: false }]);
  const [editId, setEditId] = useState(false);

  // This is the correct way to log state after it has updated
  useEffect(() => {
    console.log("Tasks updated:", tasks);
  }, [tasks]);

  let date = new Date();
  function addTask() {
    if (!editId) {
      if (value.trim() !== "") {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
        setTasks((prevTasks) => [...prevTasks, { id: Date.now(), task: value, date: formattedDate, checked: false }]);
        setValue("");
      } else {
        alert("Please enter a task😁");
      }
    }
    else {
      setTasks((tasks) =>
        tasks.map((task) =>
          task.id === editId ? { ...task, task: value } : task
        )
      );
      setEditId(false);
      setValue("");
    }
  }

  function handleCheck(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function editTask(id) {
    const targetTask = tasks.find((task) => task.id === id);
    if (targetTask) {
      setValue(targetTask.task);
      setEditId(id);
    }
  }

  return (
    <div className="todo-container">
      <h1>My Todo App</h1>
      <form onSubmit={(e) => { e.preventDefault(); addTask(); }}>
        <input type="text" placeholder='enter a task' value={value} onChange={(e) => { setValue(e.target.value) }} />
        <button type="submit">{editId ? "Save Task" : "Add Task"}</button>
      </form>
      <TodoList tasks={tasks} handleCheck={handleCheck} deleteTask={deleteTask} editTask={editTask} />
    </div>
  )
}

export default App