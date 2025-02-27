import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../pages/firebaseConfig"; // Import Firebase authentication
import { useAuthState } from "react-firebase-hooks/auth";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>; // Show loading state
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
