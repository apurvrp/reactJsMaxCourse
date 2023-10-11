import React from "react";
import produce from "immer";

const javascript_basic_concepts = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  // For Immutation usecase us immer => produce
  const setTestData = (state, { payload }) => {
    return produce(state, (draft) => {
      draft.testData = payload;
      return draft;
    });
  };

  /* 
    API call via fetch functions and axios 
    ====================================================
  */

  const getStaffList = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}institute-user/staff/details`,
        params: {
          from_date: payload.from_date,
          to_date: payload.to_date,
          iid: payload.iid,
        },
      });
      return res.data;
    } catch (e) {
      return { error: e };
    }
  };

  const submitStaffAttendance = async (payload) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${REACT_APP_API_URL}staff-attendance/markattendance`,
        data: payload,
      });
      return res.data;
    } catch (error) {
      return { error: error };
    }
  };

  async function demo(payload) {
    const res = await axios({
      method: "POST",
      url: "dsdas.com",
      data: payload,
    });
  }

  // fetch functions and return promise
  useEffect(() => {
    fetch(
      "https://testing-apis-46c25-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        setUserIngredients(loadedIngredients);
      });

    // ====================================================================================== //

    fetch("URL", {
      method: method,
      body: body,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        return dispatchHttp({ responseData: responseData });
      });
  }, []);

  // Asynchronous Function ::
  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://testing-apis-46c25-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    fetchMoviesHandler();
  }

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default javascript_basic_concepts;
