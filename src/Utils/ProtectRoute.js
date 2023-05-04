import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function ProtectRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (user === false) {
    return <Navigate to="/auth" />;
  }
  return children;
}

export default ProtectRoute;
