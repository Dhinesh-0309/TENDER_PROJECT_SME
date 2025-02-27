import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../styles/Signup.css"; // Import the updated CSS

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create an Account</h2>
        
        <form className="signup-form" onSubmit={handleSignup}>
          <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="login-redirect">
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
