import React, { useState } from "react";
import styles from "./DocumentForm.module.scss";

const DocumentForm = ({ type, onBack, onGenerate }) => {
  const [form, setForm] = useState({ name: "", address: "", details: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Dummy preview
    const previewText = `
      Document Type: ${type}
      Name: ${form.name}
      Address: ${form.address}
      Details: ${form.details}
    `;
    onGenerate(form, previewText);
  };

  return (
    <div className={styles.formContainer}>
      <h3>Fill {type} Details</h3>
      <div className={styles.formGroup}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label>Address</label>
        <input name="address" value={form.address} onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label>Details</label>
        <textarea
          name="details"
          value={form.details}
          onChange={handleChange}
        />
      </div>

      <div className={styles.buttons}>
        <button onClick={onBack} className={styles.back}>
          Back
        </button>
        <button onClick={handleSubmit} className={styles.generate}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default DocumentForm;