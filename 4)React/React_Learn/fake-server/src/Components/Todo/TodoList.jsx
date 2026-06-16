
import TodoItem from './TodoItem';

function TodoList({ tasks, handleCheck, deleteTask ,editTask}) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          id={task.id}
          task={task.task}
          date={task.date}
          checked={task.checked}
          handleCheck={handleCheck}
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;