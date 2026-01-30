import styles from "./StepIndicator.module.scss";

export default function StepIndicator({ step }) {
  return (
    <div className={styles.steps}>
      {[1, 2, 3, 4].map((num) => (
        <div
          key={num}
          className={`${styles.step} ${step >= num ? styles.active : ""}`}
        >
          Step {num}
        </div>
      ))}
    </div>
  );
}