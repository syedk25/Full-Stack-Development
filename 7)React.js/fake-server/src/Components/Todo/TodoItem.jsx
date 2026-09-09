import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import './TodoItem.css'; // Import TodoItem specific CSS

function TodoItem({ id, task, date, checked, handleCheck, deleteTask, editTask }) {
  return (
    <li className={`todo-item ${checked ? 'checked' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleCheck(id)}
        className="todo-checkbox"
      />
      <span className="todo-task-text">{task}</span>
      <span className="todo-date">{date}</span>
      <div className="todo-actions">
        <FaEdit className="edit-icon" onClick={() => editTask(id)} />
        <MdDeleteForever className="delete-icon" onClick={() => deleteTask(id)} />
      </div>
    </li>
  );
}

export default TodoItem;