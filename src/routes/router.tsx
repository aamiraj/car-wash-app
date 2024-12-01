import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import LogIn from "../pages/LogIn/LogIn";
import Services from "../pages/OurServices/OurServices";
import DetailsService from "../pages/DetailsService/DetailsService";
import BookingDetails from "../pages/Booking/BookingDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:serviceId",
        element: <DetailsService />,
      },
      {
        path: "/booking/:serviceId",
        element: <BookingDetails />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/log-in",
    element: <LogIn />,
  }
]);

export default router;
