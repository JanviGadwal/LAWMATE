import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Enter both email and password!");
      return;
    }

    // Get registered user from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));

    if (!userData) {
      alert("No registered user found! Please register first.");
      return;
    }

    if (userData.email !== email || userData.password !== password) {
      alert("Invalid email or password!");
      return;
    }

    // Successful login: generate token
    const token = "MOCK_TOKEN_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("token", token);

    navigate("/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Login to LawMate</h2>

        <div className={styles.formGroup}>
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
        </div>

        <button className={styles.loginBtn} onClick={handleLogin}>
          Login
        </button>

        <p className={styles.linkGroup}>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;