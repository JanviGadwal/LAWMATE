import React from "react";
import styles from "./DocumentPreview.module.scss";

const DocumentPreview = ({ type, data, preview, onBack }) => {
  return (
    <div className={styles.previewContainer}>
      <h3>{type} Preview</h3>
      <pre>{preview}</pre>

      <div className={styles.buttons}>
        <button onClick={onBack} className={styles.back}>
          Back
        </button>
        <button
          onClick={() => alert("Download feature coming soon!")}
          className={styles.download}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default DocumentPreview;