import styles from "./SubCategorySelector.module.scss";

export default function SubCategorySelector({
  category,
  subCategories,
  selected,
  onSelect,
  onBack
}) {
  return (
    <div>
      <h3>{category}</h3>

      <div className={styles.grid}>
        {subCategories.map((sub) => (
          <div
            key={sub}
            className={`${styles.card} ${selected === sub ? styles.active : ""}`}
            onClick={() => onSelect(sub)}
          >
            {sub}
          </div>
        ))}
      </div>

      <button onClick={onBack} className={styles.back}>Back</button>
    </div>
  );
}