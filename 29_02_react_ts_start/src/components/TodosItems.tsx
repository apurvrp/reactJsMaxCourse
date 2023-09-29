import React from "react";
import classes from "./TodoItems.module.css";

const TodosItems: React.FC<{
  text: string;
  //   onRemoveTodo: (event: React.MouseEvent) => void;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodosItems;
