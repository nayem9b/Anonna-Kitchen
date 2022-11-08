import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home";
import Root from "../Root/Root";
import AllService from "../Service/AllService/AllService";
import ServiceDetails from "../Service/ServiceDetails";
import LogIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <LogIn></LogIn>,
      },
      {
        path: "/services",
        element: <AllService></AllService>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
