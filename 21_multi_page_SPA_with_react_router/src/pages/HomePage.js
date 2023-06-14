import { Link } from "react-router-dom";
// import MainNavigation from "../components/MainNavigation";

function HomePage() {
  return (
    <>
      {/* <MainNavigation /> */}
      <h1>My Home Page</h1>
      {/* <p>
        Go to <a href="/products">the list of products</a>.
      </p> */}
      <p>
        Go to <Link to="/products">the list of products</Link>.
      </p>
    </>
  );
}

export default HomePage;
