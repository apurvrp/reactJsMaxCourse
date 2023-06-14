import {
  RouterProvider,
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

// https:://example.com/product => https:: => protocol, example.com => domain name, /product => router path

// const routerDefinations = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routerDefinations);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
