import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AdvocateCard from "../components/AdvocateCard";
import styles from "./Advocates.module.scss";

const advocates = [
  { id: 1, name: "Adv. Rahul Sharma", specialization: ["Criminal", "Traffic"], rating: 4.8, experience: "8 yrs" },
  { id: 2, name: "Adv. Priya Singh", specialization: ["Family", "Divorce"], rating: 4.4, experience: "5 yrs" },
  { id: 3, name: "Adv. Ankit Verma", specialization: ["Corporate", "Tax"], rating: 4.9, experience: "10 yrs" },
  { id: 4, name: "Adv. Meera Kapoor", specialization: ["Property", "Civil"], rating: 4.7, experience: "7 yrs" },
  { id: 5, name: "Adv. Arjun Mehta", specialization: ["Criminal", "Cybercrime"], rating: 4.6, experience: "6 yrs" },
  { id: 6, name: "Adv. Sneha Rao", specialization: ["Family", "Adoption"], rating: 4.5, experience: "5 yrs" },
  { id: 7, name: "Adv. Rajiv Malhotra", specialization: ["Corporate", "IPR"], rating: 4.9, experience: "12 yrs" },
  { id: 8, name: "Adv. Kavita Joshi", specialization: ["Civil", "Contract"], rating: 4.6, experience: "8 yrs" },
  { id: 9, name: "Adv. Vikram Desai", specialization: ["Criminal", "Traffic"], rating: 4.3, experience: "4 yrs" },
  { id: 10, name: "Adv. Ritu Khanna", specialization: ["Family", "Divorce"], rating: 4.7, experience: "9 yrs" },
];

const Advocates = () => {
  const [query, setQuery] = useState("");

  const filtered = advocates
    .filter(a =>
      a.specialization.join(" ").toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => b.rating - a.rating);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>Find Advocates</h2>

        <input
          className={styles.search}
          placeholder="Search by crime or specialization"
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className={styles.grid}>
          {filtered.map((adv) => (
            <AdvocateCard key={adv.id} advocate={adv} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Advocates;