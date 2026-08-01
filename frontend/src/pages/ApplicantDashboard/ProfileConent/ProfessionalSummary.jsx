import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./professionalSummary.module.css";

function ProfessionalSummary({ summary }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.summaryCard}>

      {/* Card Header */}
      <div className={styles.cardHeader}>
        <h2>Professional Summary</h2>

        <Link
          className={styles.editButton}
          to="/applicant/edit-professionalSummary"
        >
          <FiEdit2 />
          <span>Edit</span>
        </Link>
      </div>

      {/* Summary Content */}
      <div className={styles.summaryContent}>
        <p
          className={`${styles.summaryText} ${
            isExpanded ? styles.expanded : ""
          }`}
        >
          {summary || "No professional summary added yet."}
        </p>

        {/* View More / View Less */}
        {summary && summary.length > 180 && (
          <button
            className={styles.viewMoreButton}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "View less" : "View more"}
          </button>
        )}
      </div>

    </div>
  );
}

export default ProfessionalSummary;