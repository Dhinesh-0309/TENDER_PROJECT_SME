import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CommunityHub from "./pages/CommunityHub.jsx";
import Tenders from "./pages/Tenders.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Navbar from "./components/Navbar.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

function App() {
  return (
    <>
      <MainLayout />
    </>
  );
}

function MainLayout() {
  const location = useLocation();
  
  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = ["/", "/login", "/signup"];

  return (
    <>
      {/* Show Navbar only if current route is not in the hideNavbarRoutes list */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/community" element={<PrivateRoute><CommunityHub /></PrivateRoute>} />
        <Route path="/tenders" element={<PrivateRoute><Tenders /></PrivateRoute>} />

        {/* Admin Only Route */}
        <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;
