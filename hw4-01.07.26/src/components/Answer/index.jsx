import { useState } from "react";
import styles from "./Answer.module.css";

function Answer({ a, b, updatePoints }) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isCorrect = Number(answer) === a + b;

    updatePoints(isCorrect);

    setAnswer("");
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Your answer"
      />

      <button type="submit">
        Check
      </button>
    </form>
  );
}

export default Answer;