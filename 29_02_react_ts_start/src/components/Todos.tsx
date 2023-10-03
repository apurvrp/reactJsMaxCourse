import React, { useContext } from "react";
import Todo from "../models/todo";
import TodosItems from "./TodosItems";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => {
        return (
          <TodosItems
            key={item.id}
            text={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
