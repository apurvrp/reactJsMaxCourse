import React, { useEffect, useRef, useState } from "react";

import Card from "../UI/Card";
import useHttp from "../../hooks/http";
import ErrorModal from "../UI/ErrorModal";
import "./Search.css";

const Search = React.memo(({ onLoadIngredients }) => {
  const [enteredFilter, setEnterdFilter] = useState("");
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef?.current?.value) {
        const query =
          enteredFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
        sendRequest(
          "https://testing-apis-46c25-default-rtdb.firebaseio.com/ingredients.json" +
            query,
          "GET"
        );
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, sendRequest]);

  useEffect(() => {
    const loadedIngredients = [];
    for (const key in data) {
      loadedIngredients.push({
        id: key,
        title: data[key].title,
        amount: data[key].amount,
      });
    }
    onLoadIngredients(loadedIngredients);
  }, [data, isLoading, error, onLoadIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input
            type="text"
            value={enteredFilter}
            onChange={(event) => setEnterdFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
