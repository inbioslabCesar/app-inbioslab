import { Navigate, Outlet } from "react-router-dom";
import { LOGIN} from "../../routes/paths";
import { useAuthContext } from "../../contexts/authContext";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthContext();
  if (!isAuthenticated) {
    return <Navigate to={LOGIN} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
