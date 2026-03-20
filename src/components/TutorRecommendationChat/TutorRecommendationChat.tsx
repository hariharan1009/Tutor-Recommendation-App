"use client";

import React, { useState } from "react";
import styles from "./TutorRecommendationChat.module.css";

interface Tutor {
  name: string;
  subject: string;
  experience: string;
  rating: number;
}

const TutorRecommendationChat = () => {
  const [query, setQuery] = useState("");
  const [recommendations, setRecommendations] = useState<Tutor[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRecommendations = async () => {
    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    try {
      const response = await fetch("/api/groq-recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch tutor recommendations");
      }

      const data = await response.json();
      setRecommendations(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      fetchRecommendations();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎓 Find Your Perfect Tutor</h1>

      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="What subject do you need help with? (e.g., Mathematics, Java, Physics)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className={styles.input}
        />

        <button
          onClick={fetchRecommendations}
          disabled={isLoading}
          className={styles.button}
        >
          {isLoading ? "⏳ Searching..." : "🔍 Find Tutors"}
        </button>
      </div>

      {error && <p className={styles.error}>⚠ {error}</p>}

      {isLoading && <p className={styles.text}>🔄 Finding the best tutors for you...</p>}

      {recommendations.length > 0 && (
        <div className={styles.recommendations}>
          <h2 className={styles.subtitle}>✨ Top Tutor Matches</h2>
          <ul className={styles.list}>
            {recommendations.map((tutor, index) => (
              <li key={index} className={styles.tutorCard}>
                <h3>👤 {tutor.name}</h3>
                <p>📘 <b>Subject:</b> {tutor.subject}</p>
                <p>💼 <b>Experience:</b> {tutor.experience}</p>
                <p>⭐ <b>Rating:</b> {tutor.rating}/5</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {recommendations.length === 0 && !isLoading && !error && query && (
        <p className={styles.text}>
          😕 No tutors found for "{query}". Try a different subject.
        </p>
      )}

      {recommendations.length === 0 && !isLoading && !error && !query && (
        <p className={styles.text}>
          👆 Enter a subject above to get personalized tutor recommendations
        </p>
      )}
    </div>
  );
};

export default TutorRecommendationChat;