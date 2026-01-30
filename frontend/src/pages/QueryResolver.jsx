import React, { useState } from "react";
import styles from "./QueryResolver.module.scss";

// Dummy data
const categories = [
  { id: 1, name: "Civil Law", subcategories: ["Property Dispute", "Marriage & Divorce", "Contracts"] },
  { id: 2, name: "Criminal Law", subcategories: ["Theft", "Assault", "Fraud"] },
  { id: 3, name: "Corporate Law", subcategories: ["Company Registration", "Taxation", "Labor Laws"] },
];

const cardsData = [
  { id: 1, title: "Draft Notice", description: "Legal notice template" },
  { id: 2, title: "Complaint", description: "File a complaint" },
  { id: 3, title: "Agreement", description: "Draft agreement" },
  { id: 4, title: "Petition", description: "Legal petition template" },
];

const documentTypes = ["Affidavit", "Legal Notice", "Petition", "Agreement"];

export default function QueryResolver() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const [documentType, setDocumentType] = useState(documentTypes[0]);

  const maxCardSelection = 2;

  // Updated: store full card objects
  const handleCardToggle = (card) => {
    if (selectedCards.find((c) => c.id === card.id)) {
      setSelectedCards(selectedCards.filter((c) => c.id !== card.id));
    } else if (selectedCards.length < maxCardSelection) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const nextStep = () => {
    if (step === 1 && !selectedCategory) return alert("Select a category");
    if (step === 1 && !selectedSubcategory) return alert("Select a subcategory");
    if (step === 2 && selectedCards.length === 0) return alert("Select at least one card");
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleGenerate = () => {
    alert(
      `Document Generated!\nCategory: ${selectedCategory}\nSubcategory: ${selectedSubcategory}\nCards: ${selectedCards.map(c => c.title).join(", ")}\nDocument Type: ${documentType}`
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Document Generator</h2>

      {/* Step Indicators */}
      <div className={styles.steps}>
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className={`${styles.step} ${step === s ? styles.active : ""}`}>Step {s}</div>
        ))}
      </div>

      {/* Step 1: Categories */}
      {step === 1 && (
        <div className={styles.stepContent}>
          <h3>Select Category</h3>
          <div className={styles.categoryContainer}>
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`${styles.categoryCard} ${selectedCategory === cat.name ? styles.selected : ""}`}
                onClick={() => { setSelectedCategory(cat.name); setSelectedSubcategory(null); }}
              >
                {cat.name}
              </div>
            ))}
          </div>

          {selectedCategory && (
            <>
              <h4>Choose Subcategory</h4>
              <div className={styles.subcategoryContainer}>
                {categories.find((c) => c.name === selectedCategory).subcategories.map((sub) => (
                  <div
                    key={sub}
                    className={`${styles.subcategoryCard} ${selectedSubcategory === sub ? styles.selected : ""}`}
                    onClick={() => setSelectedSubcategory(sub)}
                  >
                    {sub}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Step 2: Cards */}
      {step === 2 && (
        <div className={styles.stepContent}>
          <h3>Choose Cards (Max {maxCardSelection})</h3>
          <div className={styles.cardsContainer}>
            {cardsData.map((card) => {
              const isSelected = selectedCards.find((c) => c.id === card.id);
              return (
                <div
                  key={card.id}
                  className={`${styles.card} ${isSelected ? styles.selected : ""}`}
                  onClick={() => handleCardToggle(card)}
                >
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 3: Confirm */}
      {step === 3 && (
        <div className={styles.stepContent}>
          <h3>Confirm Your Details</h3>
          <div className={styles.summary}>
            <p><strong>Category:</strong> {selectedCategory}</p>
            <p><strong>Subcategory:</strong> {selectedSubcategory}</p>
            <p><strong>Selected Cards:</strong> {selectedCards.map((c) => `${c.title} - ${c.description}`).join("; ")}</p>
          </div>
        </div>
      )}

      {/* Step 4: Document Type */}
      {step === 4 && (
        <div className={styles.stepContent}>
          <h3>Generate Document</h3>
          <label>
            Document Type:{" "}
            <select value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
              {documentTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>
        </div>
      )}

      {/* Navigation */}
      <div className={styles.navigation}>
        {step > 1 && <button className={styles.backBtn} onClick={prevStep}>Back</button>}
        {step < 4 && <button className={styles.nextBtn} onClick={nextStep}>Next</button>}
        {step === 4 && <button className={styles.generateBtn} onClick={handleGenerate}>Generate Document</button>}
      </div>
    </div>
  );
}