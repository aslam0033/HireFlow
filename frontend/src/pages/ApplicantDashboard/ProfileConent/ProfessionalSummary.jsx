import { FiEdit2 } from "react-icons/fi";
import styles from "./professionalSummary.module.css";

function ProfessionalSummary() {
  const summary =
    "Full Stack Developer with a strong foundation in React, JavaScript, Node.js, Express.js, and MongoDB. Passionate about building scalable web applications, solving complex problems, and continuously learning new technologies.";

  return (
    <div className={styles.summaryCard}>
      <div className={styles.cardHeader}>
        <h2>Professional Summary</h2>

        <button className={styles.editButton}>
          <FiEdit2 />
          <span>Edit</span>
        </button>
      </div>

      <p className={styles.summaryText}>
        {summary}
      </p>
    </div>
  );
}

export default ProfessionalSummary;