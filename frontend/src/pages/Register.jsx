import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Register.module.scss";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email || !password || !confirm) {
      alert("Please fill all fields!");
      return;
    }
    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    // Save user info in localStorage (optional)
    localStorage.setItem(
      "user",
      JSON.stringify({ name, email, password })
    );

    // Redirect to login page instead of dashboard
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Create Your Account</h2>

        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>

        <button className={styles.registerBtn} onClick={handleRegister}>
          Register
        </button>

        <p className={styles.linkGroup}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;