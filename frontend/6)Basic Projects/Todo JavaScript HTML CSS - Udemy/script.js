const todoList = document.getElementById("todo-list");
const addButton = document.getElementById("add-button");
const newTodoInput = document.getElementById("new-todo");

function addTodo(text, completed = false) {
  const li = document.createElement("li");
  li.className = "todo-item";
  if (completed) {
    li.classList.add("completed");
  }

  li.innerHTML = `
    <input type="checkbox" ${completed ? "checked" : ""} />
    <label>${text}</label>
    <div class="todo-actions">
        <div class="icon edit-icon">
            <img src="edit.svg" alt="Edit" />
        </div>
        <div class="icon delete-icon">
            <img src="delete.svg" alt="Delete" />
        </div>
    </div>
  `;

  todoList.appendChild(li);
}

function handleAddButtonClick() {
  const text = newTodoInput.value.trim();
  if (text !== "") {
    addTodo(text);
    newTodoInput.value = "";
  }
}

function toggleTodoCompleted(target) {
  const item = target.closes(".todo-item");
  item.classList.toggle("completed");
}

function deleteTodoItem(target) {
  const item = target.closest(".todo-item");
  item.remove();
}

function handleTodoListClick(e) {
  const target = e.target;

  if (target.type === "checkbox") {
    toggleTodoCompleted(target);
  }

  if (target.closest(".delete-icon")) {
    deleteTodoItem(target);
  }
}

addButton.addEventListener("click", handleAddButtonClick);
todoList.addEventListener("click", handleTodoListClick);

const mockTodos = [
  { text: "Buy groceries", completed: false },
  { text: "Walk the dog", completed: true },
  { text: "test", completed: false },
];

mockTodos.forEach((todo) => addTodo(todo.text, todo.completed));
