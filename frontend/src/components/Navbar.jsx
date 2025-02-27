import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../pages/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-lg font-bold">Tender Platform</h1>
      <div className="space-x-4">
        <Link to="/" className="text-white">Home</Link>
        {user && <Link to="/dashboard" className="text-white">Dashboard</Link>}
        {user && <Link to="/community" className="text-white">Community</Link>}
        {user && <Link to="/tenders" className="text-white">Tenders</Link>}

        {/* Show Admin Link Only for Admins */}
        {user?.email === "admin@example.com" && (
          <Link to="/admin" className="text-yellow-400">Admin Panel</Link>
        )}

        {user ? (
          <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
        ) : (
          <>
            <Link to="/login" className="text-white">Login</Link>
            <Link to="/signup" className="text-white">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
