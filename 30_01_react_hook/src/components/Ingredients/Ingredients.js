import React, { useCallback, useEffect, useReducer /*useState*/ } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...currentHttpState, loading: false };

    case "ERROR":
      return { loading: false, error: action.errorMessage };

    case "CLEAR": {
      return { ...currentHttpState, error: null };
    }
    default:
      throw new Error("Should not be reached!");
  }
};

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  // const [userIngredients, setUserIsngredients] = useState([]);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(null);

  useEffect(() => {
    // fetch(
    //   "https://testing-apis-46c25-default-rtdb.firebaseio.com/ingredients.json"
    // )
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     const loadedIngredients = [];
    //     for (const key in responseData) {
    //       loadedIngredients.push({
    //         id: key,
    //         title: responseData[key].title,
    //         amount: responseData[key].amount,
    //       });
    //     }
    //     setUserIngredients(loadedIngredients);
    //   });

    console.log("RENDERING Ingredients", userIngredients);
  }, [userIngredients]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = (ingredient) => {
    // setIsLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch(
      "https://testing-apis-46c25-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        // setIsLoading(false);
        dispatchHttp({ type: "RESPONSE" });
        return response.json;
      })
      .then((responseData) => {
        // setUserIngredients((preIngredients) => [
        //   ...preIngredients,
        //   { id: responseData.name, ...ingredient },
        // ]);
        dispatch({
          type: "ADD",
          ingredient: { id: responseData.name, ...ingredient },
        });
      })
      .catch((error) => {
        // setIsError(error.message);
        // setIsLoading(false);
        dispatchHttp({
          type: "ERROR",
          errorMessage: "Something went to  wrong",
        });
      });
  };

  const deleteIngredientHandler = (ingreId) => {
    // setIsLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch(
      `https://testing-apis-46c25-default-rtdb.firebaseio.com/ingredients/${ingreId}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        dispatchHttp({ type: "RESPONSE" });
        // setIsLoading(false);
        // setUserIngredients((lastIngredients) =>
        //   lastIngredients.filter((ingredient) => ingredient.id !== ingreId)
        // );
        dispatch({ type: "DELETE", id: ingreId });
      })
      .catch((error) => {
        // setIsError(error.message);
        // setIsLoading(false);
        dispatchHttp({
          type: "ERROR",
          errorMessage: "Something went to Wrong!",
        });
      });
  };

  const clearError = () => {
    // setIsError(null);
    dispatchHttp({ type: "CLEAR" });
  };

  return (
    <div className="App">
      {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
      )}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {/* Need to add list here! */}
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={deleteIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
