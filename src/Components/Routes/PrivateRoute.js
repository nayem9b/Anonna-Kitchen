import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  if (user && user.uid) {
    return children;
  }
  return <Navigate to='/signin' state={{ from: location }} replace />;
};

export default PrivateRoute;
