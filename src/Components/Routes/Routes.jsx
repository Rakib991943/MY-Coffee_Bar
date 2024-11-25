
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import CoffeeCards from "../Pages/Categories/CoffeCards/CoffeeCards";
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch('../coffees.json'),

          },
          {
            path: '/category/:category',
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch('../coffees.json'),

          },
        ],
      },
      {
        path: '/dashBoard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/coffees',
        element: <Coffees></Coffees>
      }
    ]
  }
])

export default routes;
