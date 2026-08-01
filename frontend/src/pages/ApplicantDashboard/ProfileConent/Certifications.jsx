import {
  FiPlus,
  FiEdit2,
  FiExternalLink,
} from "react-icons/fi";
import styles from "./certifications.module.css";
import { useState } from "react";

function Certifications() {
  const [certifications, Setcertifications] = useState([])
  

  return (
    <div className={styles.certificationsCard}>
      <div className={styles.cardHeader}>
        <h2>Certifications</h2>

        <button className={styles.addButton}>
          <FiPlus />
          <span>Add Certification</span>
        </button>
      </div>

      <div className={styles.certificationsList}>
        {certifications.map((certification) => (
          <div
            className={styles.certificationItem}
            key={certification.id}
          >
            <div className={styles.certificationHeader}>
              <h3>{certification.name}</h3>

              <button className={styles.editButton}>
                <FiEdit2 />
              </button>
            </div>

            <p className={styles.organization}>
              {certification.organization}
            </p>

            <p className={styles.issueDate}>
              {certification.issueDate}
            </p>

            <p className={styles.credentialId}>
              Credential ID: {certification.credentialId}
            </p>

            <a
              href={certification.credentialLink}
              className={styles.credentialLink}
            >
              <FiExternalLink />
              <span>View Credential</span>
            </a>
          </div>
        ))}
      </div>

      {certifications.length > 2 && (
        <button className={styles.viewAllButton}>
          View All Certifications
        </button>
      )}
    </div>
  );
}

export default Certifications;