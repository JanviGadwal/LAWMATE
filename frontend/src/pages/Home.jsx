import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./Home.module.scss";

const categories = [
  "Criminal Law",
  "Family Law",
  "Divorce & Custody",
  "Traffic Violations",
  "Property & Real Estate",
  "Employment Law",
  "Cyber Law",
  "Contract & Business",
  "Consumer Rights",
  "Intellectual Property",
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.grid}>
          <div>
            <h1 className={styles.title}>
              Get Instant Legal Guidance, Anytime
            </h1>

            <p className={styles.description}>
              LawMate helps you understand your legal situation and connect with
              the right advocate instantly.
            </p>

            {/* SEARCH INPUT WITH ICON */}
            <div className={styles.searchBox}>
              <span className={styles.icon}>🔍</span>
              <input
                type="text"
                placeholder="Describe your legal issue..."
              />
            </div>

            <div className={styles.buttonGroup}>
              <button
                className={styles.ask}
                onClick={() => navigate("/query-resolver")}
              >
                Ask LawMate
              </button>

              <button
                className={styles.browse}
                onClick={() => navigate("/advocates")}
              >
                Browse Advocates
              </button>
            </div>
          </div>

          <div className={styles.heroIcon}>⚖️</div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className={styles.categories}>
        <h3>Popular Legal Categories</h3>
        <div className={styles.grid}>
          {categories.map((cat, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ "--i": index }}
            >
              {cat}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;