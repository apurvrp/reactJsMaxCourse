import {
  // Route,
  RouterProvider,
  createBrowserRouter,
  // createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

// https:://example.com/product => https:: => protocol, example.com => domain name, /product => router path

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

// const routerDefinations = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routerDefinations);

// function App() {
//   return <RouterProvider router={router} />;
// }

export default App;
