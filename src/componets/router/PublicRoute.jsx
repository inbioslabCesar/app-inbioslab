import { Navigate, Outlet } from "react-router-dom";
import { PRIVATE} from "../../routes/paths";
import { useAuthContext } from "../../contexts/authContext";

const PublicRoute = () => {
  const { isAuthenticated } = useAuthContext();
  if (isAuthenticated) {
    return <Navigate to={PRIVATE} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicRoute;
