import styles from "./DecisionResult.module.scss";

export default function DecisionResult({ category, subCategory, onBack }) {
  return (
    <div className={styles.card}>
      <h2>Decision Summary</h2>

      <p><strong>Category:</strong> {category}</p>
      <p><strong>Issue:</strong> {subCategory}</p>
      <p><strong>Legal Nature:</strong> Civil</p>
      <p><strong>Severity:</strong> Medium</p>
      <p><strong>Recommended Action:</strong> Send Legal Notice</p>
      <p><strong>Is Case Worth It?</strong> Yes</p>
      <p><strong>Time Estimate:</strong> 6–12 months</p>
      <p><strong>Cost Estimate:</strong> ₹15,000 – ₹30,000</p>

      <ul>
        <li>Collect relevant documents</li>
        <li>Consult specialized advocate</li>
        <li>Avoid immediate police action</li>
      </ul>

      <div className={styles.actions}>
        <button onClick={onBack}>Back</button>
        <button className={styles.primary}>Find Advocate</button>
        <button>Create Document</button>
      </div>
    </div>
  );
}