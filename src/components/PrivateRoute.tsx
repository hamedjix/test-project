import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  return <Outlet />;
};
export default PrivateRoute;
