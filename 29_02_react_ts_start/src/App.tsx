import React, { useState } from "react";
import Todos from "./components/Todos";
// import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";
import "./App.css";

function App() {
  // const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;

// import React, { useState } from "react";
// import "./App.css";
// import Todos from "./components/Todos";
// import Todo from "./models/todo";
// import NewTodo from "./components/NewTodo";

// function AppOld() {
//   // const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

//   const [todos, setTodos] = useState<Todo[]>([]);
//   const addTodoHandler = (todoText: string) => {
//     const newTodo = new Todo(todoText);

//     setTodos((prevTodos) => {
//       return prevTodos.concat(newTodo);
//     });
//   };

//   const removeTodoHandler = (todoId: string) => {
//     setTodos((prevTodos) => {
//       return prevTodos.filter((todo) => todo.id !== todoId);
//     });
//   };

//   return (
//     <div>
//       <NewTodo onAddTodo={addTodoHandler} />
//       <Todos items={todos} onRemoveTodo={removeTodoHandler} />
//     </div>
//   );
// }

// export default AppOld;
