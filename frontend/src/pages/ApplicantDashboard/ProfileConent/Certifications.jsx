import {
  FiPlus,
  FiEdit2,
  FiExternalLink,
} from "react-icons/fi";
import styles from "./certifications.module.css";

function Certifications() {
  const certifications = [
    {
      id: 1,
      name: "Full Stack Web Development",
      organization: "XYZ Academy",
      issueDate: "Issued: June 2025",
      credentialId: "ABC123456",
      credentialLink: "#",
    },
    {
      id: 2,
      name: "React.js Development",
      organization: "Online Learning Platform",
      issueDate: "Issued: March 2025",
      credentialId: "XYZ789012",
      credentialLink: "#",
    },
    {
      id: 3,
      name: "JavaScript Algorithms and Data Structures",
      organization: "Online Learning Platform",
      issueDate: "Issued: January 2025",
      credentialId: "JS456789",
      credentialLink: "#",
    },
  ];

  const visibleCertifications = certifications.slice(0, 2);

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
        {visibleCertifications.map((certification) => (
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