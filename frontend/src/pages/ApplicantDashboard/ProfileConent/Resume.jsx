import {
  FiUpload,
  FiFileText,
  FiDownload,
  FiEye,
  FiTrash2,
} from "react-icons/fi";
import styles from "./resume.module.css";

function Resume() {

  return (
    <div className={styles.resumeCard}>
      <div className={styles.cardHeader}>
        <h2>Resume</h2>

        <button className={styles.uploadButton}>
          <FiUpload />
          <span>Upload Resume</span>
        </button>
      </div>

      <div className={styles.resumeContent}>
        <div className={styles.fileIcon}>
          <FiFileText />
        </div>

        <div className={styles.fileDetails}>
          {/* <h3>{resume.name}</h3> */}

          <p>
            {/* {resume.size} • {resume.uploadedOn} */}
          </p>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.actionButton}
            title="View Resume"
          >
            <FiEye />
          </button>

          <button
            className={styles.actionButton}
            title="Download Resume"
          >
            <FiDownload />
          </button>

          <button
            className={`${styles.actionButton} ${styles.deleteButton}`}
            title="Remove Resume"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;