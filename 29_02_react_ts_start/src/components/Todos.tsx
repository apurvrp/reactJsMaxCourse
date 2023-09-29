import React from "react";
import Todo from "../models/todo";
import TodosItems from "./TodosItems";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
        return <TodosItems key={item.id} text={item.text} />;
      })}
    </ul>
  );
};

export default Todos;
