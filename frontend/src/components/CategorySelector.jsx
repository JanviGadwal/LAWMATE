import styles from "./CategorySelector.module.scss";

const categories = [
  "Traffic",
  "Land & Property",
  "Crime",
  "Family",
  "Employment",
  "Consumer",
  "Cyber Crime"
];

export default function CategorySelector({ selected, onSelect }) {
  return (
    <div className={styles.grid}>
      {categories.map((cat) => (
        <div
          key={cat}
          className={`${styles.card} ${selected === cat ? styles.active : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </div>
      ))}
    </div>
  );
}