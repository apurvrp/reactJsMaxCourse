import React from "react";

const TodosItems: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default TodosItems;
