import React, { useState } from "react";

import Card from "../UI/Card";
import LoadingIndicatior from "../UI/LoadingIndicator";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
  });

  console.log("Rendering Ingredient Form");

  const onChangeInputState = (event) => {
    let declareInputObj = inputState;
    if (event.target.id === "title") {
      declareInputObj = { ...inputState, title: event.target.value };
    }
    if (event.target.id === "amount") {
      declareInputObj = { ...inputState, amount: event.target.value };
    }
    setInputState(declareInputObj);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({
      title: inputState.title,
      amount: inputState.amount,
    });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputState.title}
              onChange={(e) => onChangeInputState(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState.amount}
              onChange={(e) => onChangeInputState(e)}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicatior />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
