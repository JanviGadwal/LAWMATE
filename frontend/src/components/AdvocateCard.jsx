import React from "react";
import styles from "./AdvocateCard.module.scss";

const AdvocateCard = ({ advocate }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          {advocate.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div className={styles.info}>
          <h3>{advocate.name}</h3>
          <p>{advocate.experience} experience</p>
        </div>
      </div>

      <div className={styles.specialization}>
        {advocate.specialization.map((spec, i) => (
          <span key={i}>{spec}</span>
        ))}
      </div>

      <div className={styles.rating}>
        <span>⭐ {advocate.rating.toFixed(1)}</span>
      </div>

      <button className={styles.contactBtn}>Contact Advocate</button>
    </div>
  );
};

export default AdvocateCard;