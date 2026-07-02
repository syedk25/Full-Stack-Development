import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { fetchTodosPage, addTodo, deleteTodo, updateTodo } from "./api";
import { useState } from "react";
import Spinner from "./Spinner";

export default function App() {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  // 🔹 Paginated query
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos", page],
    queryFn: () => fetchTodosPage(page),
    keepPreviousData: true,
  });

  // 🔹 Infinite query
  const {
    data: infiniteData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["todosInfinite"],
    queryFn: ({ pageParam = 1 }) => fetchTodosPage(pageParam),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 0 ? undefined : allPages.length + 1,
  });

  // 🔹 Add todo
  const addMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });

  // 🔹 Delete todo (optimistic)
  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onMutate: async (id) => {
      await queryClient.cancelQueries(["todos", page]);
      const prevTodos = queryClient.getQueryData(["todos", page]);
      queryClient.setQueryData(["todos", page], (old) =>
        old.filter((todo) => todo.id !== id),
      );
      return { prevTodos };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(["todos", page], context.prevTodos);
    },
    onSettled: () => queryClient.invalidateQueries(["todos", page]),
  });

  // 🔹 Update todo (optimistic)
  const updateMutation = useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo) => {
      await queryClient.cancelQueries(["todos", page]);
      const prevTodos = queryClient.getQueryData(["todos", page]);
      queryClient.setQueryData(["todos", page], (old) =>
        old.map((todo) =>
          todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo,
        ),
      );
      return { prevTodos };
    },
    onError: (err, updatedTodo, context) => {
      queryClient.setQueryData(["todos", page], context.prevTodos);
    },
    onSettled: () => queryClient.invalidateQueries(["todos", page]),
  });

  const handleAdd = () => {
    if (title.trim()) {
      addMutation.mutate({ title, completed: false });
      setTitle("");
    }
  };

  if (isLoading) return <Spinner />;
  if (error) return <p style={{ color: "red" }}>Error loading todos</p>;
  return (
    <div style={{ padding: "2rem" }}>
      <h1>React Query Unified Todo App</h1>

      {/* Add Todo */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={handleAdd}>Add Todo</button>

      {/* Paginated Todos */}
      <h2>Paginated Todos (Page {page})</h2>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() =>
                updateMutation.mutate({ ...todo, completed: !todo.completed })
              }
            >
              {todo.title}
            </span>
            <button
              style={{ marginLeft: "10px", color: "red" }}
              onClick={() => deleteMutation.mutate(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 1))}
        disabled={page === 1}
      >
        Previous
      </button>
      <button onClick={() => setPage((old) => old + 1)}>Next</button>

      {/* Infinite Scroll Todos */}
      <h2 style={{ marginTop: "2rem" }}>Infinite Scroll Todos</h2>
      {infiniteData?.pages.map((page, i) => (
        <ul key={i}>
          {page.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      ))}
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
            ? "Load More"
            : "No More Todos"}
      </button>
    </div>
  );
}
