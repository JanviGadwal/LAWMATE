import styles from "./ProblemInput.module.scss";

export default function ProblemInput({ value, onChange, onNext, onBack }) {
  return (
    <div>
      <textarea
        placeholder="Explain your situation in simple words (optional)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.textarea}
      />

      <div className={styles.actions}>
        <button onClick={onBack}>Back</button>
        <button onClick={onNext} className={styles.primary}>
          Get Legal Clarity
        </button>
      </div>
    </div>
  );
}