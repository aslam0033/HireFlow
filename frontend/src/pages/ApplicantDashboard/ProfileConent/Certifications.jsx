import {
  FiPlus,
  FiEdit2,
  FiExternalLink,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./certifications.module.css";
import { useState } from "react";

function Certifications({ certifications }) {
  const [showall, setShowall] = useState(false);
    const displayCertifications = showall
      ? certifications.sort((a, b) => a.name.localeCompare(b.position))
      : certifications.sort((a, b) => a.name.localeCompare(b.position)).slice(0, 2);
  return (
    <div className={styles.certificationsCard} id="certifications">
      <div className={styles.cardHeader}>
        <h2>Certifications</h2>

        <Link
        to='/applicant/add-certification'
         className={styles.addButton}>
          <FiPlus />
          <span>Add Certification</span>
        </Link>
      </div>

      <div className={styles.certificationsList}>
        {displayCertifications.length > 0 ? (
          displayCertifications.map((certification) => (
            <div
              className={styles.certificationItem}
              key={certification._id}
            >
              <div className={styles.certificationHeader}>
                <div>
                  <h3>{certification.name}</h3>

                  <p className={styles.organization}>
                    {certification.issuingOrganization}
                  </p>
                </div>

                <Link
                to={`/applicant/edit-certification/${certification._id}`}
                 className={styles.editButton}>
                  <FiEdit2 />
                </Link>
              </div>

              <p className={styles.issueDate}>
                Issued on{" "}
                {new Date(certification.issueDate).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    year: "numeric",
                  }
                )}
              </p>

              {certification.certificateId && (
                <p className={styles.credentialId}>
                  certificateId ID: {certification.certificateId}
                </p>
              )}

              {certification.certificateUrl && (
                <a
                  href={certification.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.credentialLink}
                >
                  <FiExternalLink />
                  <span>View Credential</span>
                </a>
              )}
            </div>
          ))
        ) : (
          <div className={styles.emptyState}>
            <p>No certifications added yet.</p>
          </div>
        )}
      </div>

      {certifications.length > 2 && (
        <button
        onClick={()=>setShowall(!showall)}
         className={styles.viewAllButton}>
          {showall?"view less":"view more"}
        </button>
      )}
    </div>
  );
}

export default Certifications;