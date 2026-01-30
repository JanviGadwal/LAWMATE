// src/pages/DocumentGenerator.jsx
import React, { useState } from "react";
import styles from "./DocumentGenerator.module.scss";

const documentTypes = [
  "Notice",
  "Agreement",
  "Contract",
  "Petition",
  "Affidavit",
];

const DocumentGenerator = ({ category, cards, onBack }) => {
  const [documentType, setDocumentType] = useState("");
  const [content, setContent] = useState("");

  const generateDocument = () => {
    if (!documentType) {
      alert("Please select a document type!");
      return;
    }
    alert(`Generating ${documentType} for category "${category}" with cards [${cards.map(c=>c.title).join(", ")}] and content:\n${content}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <label>Document Type:</label>
        <select value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
          <option value="">-- Select Type --</option>
          {documentTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label>Content:</label>
        <textarea
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write the content for the document here..."
        ></textarea>
      </div>

      <div className={styles.navigation}>
        <button onClick={onBack}>Back</button>
        <button onClick={generateDocument}>Generate Document</button>
      </div>
    </div>
  );
};

export default DocumentGenerator;