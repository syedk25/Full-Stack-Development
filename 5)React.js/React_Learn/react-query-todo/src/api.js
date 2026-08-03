import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Fetch with pagination
export const fetchTodosPage = async (page = 1) => {
  const res = await axios.get(`${API_URL}?_limit=5&_page=${page}`);
  return res.data;
};

// Add todo
export const addTodo = async (newTodo) => {
  const res = await axios.post(API_URL, newTodo);
  return res.data;
};

// Delete todo
export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};

// Update todo
export const updateTodo = async (todo) => {
  const res = await axios.put(`${API_URL}/${todo.id}`, todo);
  return res.data;
};
