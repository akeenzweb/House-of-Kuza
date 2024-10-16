import React from "react";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Collections from "./pages/Collections/Collections";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';  // Import animation components
import './App.css';  // Add animation CSS here

const Layout = () => {
  const location = useLocation();  // Get the current location (route)

  return (
    <div>
      <Header />
      <ScrollRestoration />
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames={{ enter: 'circle-enter', exit: 'circle-exit' }}>
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
