import React from "react";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Collections from "./pages/Collections/Collections";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  // ScrollRestoration,
} from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/collections",
        element: <Collections />
      },
      {
        path: "/product/:id",
        element: <ProductDetails />
      }
    ]
  }
])


function App() {
  return (
    <div className="App">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
