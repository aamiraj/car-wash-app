import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { Navigate, useLocation } from "react-router-dom";

interface TAppProps {
  selectedRole: Array<string>;
  children: ReactNode;
}

const ProtectedPage = ({ selectedRole, children }: TAppProps) => {
  const user = useAppSelector((state) => state?.auth?.user);
  // console.log(role);
  const location = useLocation();

  if (user && selectedRole.includes(user?.role)) {
    return children;
  }

  return <Navigate to="/log-in" state={{ from: location }} replace />;
};

export default ProtectedPage;
