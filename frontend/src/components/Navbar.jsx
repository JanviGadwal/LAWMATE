// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const getInitials = (name) => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">LawMate</Link>
      </div>

      <ul className={styles.navLinks}>
        <li><Link to="/advocates" className={styles.animatedLink}>Advocates</Link></li>
        <li><Link to="/acts" className={styles.animatedLink}>Acts</Link></li>
      </ul>

      {user ? (
        <div className={styles.avatarWrapper}>
          <div
            className={styles.avatar}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {getInitials(user.name)}
          </div>
          {dropdownOpen && (
            <div className={styles.dropdown}>
              <button className={styles.logoutBtn} onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.authLinks}>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;