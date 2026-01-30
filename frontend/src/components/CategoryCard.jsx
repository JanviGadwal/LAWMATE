import React from "react";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ title, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h4 className={styles.title}>{title}</h4>
    </div>
  );
};

export default CategoryCard;