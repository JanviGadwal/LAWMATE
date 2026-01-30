import React from "react";
import styles from "./DocumentTypeSelector.module.scss";

const DocumentTypeSelector = ({ onSelect }) => {
  const types = ["Legal Notice", "Affidavit", "Complaint Letter"];

  return (
    <div className={styles.wrapper}>
      <h3>Select Document Type</h3>
      <div className={styles.buttons}>
        {types.map((type) => (
          <button key={type} onClick={() => onSelect(type)}>
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DocumentTypeSelector;