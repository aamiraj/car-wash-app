import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import LogIn from "../pages/LogIn/LogIn";
import Services from "../pages/OurServices/OurServices";
import DetailsService from "../pages/DetailsService/DetailsService";
import BookingDetails from "../pages/Booking/BookingDetails";
import Success from "../pages/Success";
import Error from "../pages/Error";
import AdminLayout from "../components/layout/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard/AdminDashboard";
import ServiceManagement from "../pages/admin/ServiceManagement/ServiceManagement";
import SlotManagement from "../pages/admin/SlotManagement/SlotManagement";
import UsersManagement from "../pages/admin/UsersManagement/UsersManagement";
import CustomerLayout from "../components/layout/CustomerLayout";
import CustomerDashboard from "../pages/customer/CustomerDashboard/CustomerDashboard";
import AccountInfo from "../pages/customer/AccountInfo/AccountInfo";
import ProtectedPage from "../components/ui/ProtectedPage";
import Reviews from "../pages/Reviews/Reviews";
import Compare from "../pages/Compare/Compare";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/compare",
        element: <Compare />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedPage selectedRole={["admin", "superAdmin"]}>
        <AdminLayout />
      </ProtectedPage>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "/admin/service-management",
        element: <ServiceManagement />,
      },
      {
        path: "/admin/slot-management",
        element: <SlotManagement />,
      },
      {
        path: "/admin/users-management",
        element: <UsersManagement />,
      },
    ],
  },
  {
    path: "/customer",
    element: (
      <ProtectedPage selectedRole={["user"]}>
        <CustomerLayout />
      </ProtectedPage>
    ),
    children: [
      {
        index: true,
        element: <CustomerDashboard />,
      },
      {
        path: "/customer/account-info",
        element: <AccountInfo />,
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
  },
]);

export default router;
