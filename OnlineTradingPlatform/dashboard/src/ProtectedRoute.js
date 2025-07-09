import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./utils/auth";

const ProtectedRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="http://localhost:3000/signup" />; // assuming frontend on 3000 and dashboard on 3001 , backend on 3002
};

export default ProtectedRoute;
