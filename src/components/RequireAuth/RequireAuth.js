import { useAuth } from "../../contexts/auth-context";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const {
    authState: { token },
  } = useAuth();
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export { RequireAuth };
