import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default function DemoFunciton(props) {
  // methods

  // methods

  return <div>dasdasdas</div>;
}

class DemoClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: false };
  }
  // methods
  handler() {
    this.setState((preState) => ({
      isToggle: !preState.isToggle,
    }));
  }
  // methods
  render() {
    return <div>Hello World</div>;
  }
}

<Switch>
  <Route
    exact
    path={"dasd/dasdas/dasdsa/dasdasdasdasdasdasdas/dasdasdas"}
    component={DemoClassComp}
  />

  <Route path={"dadas/asdas"} component={DemoFunciton} />

  <Redirect to={"dadadas/dasdasdas"} />
</Switch>;

const getAPICall = async (payload) => {
  try {
    const res = await axios({
      method: "GET",
      url: "xyz.com/getData",
      params: {
        id: payload.id,
        userType: payload.userType,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

const postAPICall = async (payload) => {
  try {
    const res = await axios({
      method: "POST",
      url: "abc.com/addForm",
      data: payload,
    });
    return res.data;
  } catch (error) {
    return { error: error };
  }
};

const sendRequest = (payload) => {
  fetch(payload.url, {
    method: "POST",
    body: payload.body,
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error;
    });
};
