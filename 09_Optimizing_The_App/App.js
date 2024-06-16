import { lazy, Suspense } from "react";
import React, { lazy } from "react";
import ReactDOM from "React-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

// import Grocery from "./src/components/Grocery";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet />
      {/* outlet will replace by component which we want to leaded */}
    </div>
  );
};

//  chunking
//  Code splitting
//  dynamic bundling
//  lazy loading
//  on demand loading
//dynamix import

//lazy loading :- we use to distributes the code into chunks or to reduce bundle size we do lazy loading

//Grocery will leaded when we want
const Grocery = lazy(() => import("./src/components/Grocery.js"));

// lazy function came from react library and it take callback function and this callback function uses function import

//using this we can make different bundler for specific component

//When we do click on Grocery it will take some time to fetch data but react is fast and in app.js it have not grocery then it will give error.
// to solve this issue react gives "suspense" to handle state
//It give data only on when we request something
//suspense is component given by react and we just fo wrap our component into it.

/*

   lazy loading is a design pattern. It allows you to load parts of your application on-demand to reduce the initial load time. For example, you can initially load the components and modules related to user login and registration. Then, you can load the rest of the components based on user navigation.

*/

//configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
