import { FiEdit2, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./personalInfo.module.css";

function PersonalInfo({personalInfo}) {
 
  return (
    <div className={styles.infoCard}>
      <div className={styles.cardHeader}>
        <h2>Personal Information</h2>

        <Link to='/applicant/edit-personalInfo' className={styles.editButton}>
          <FiEdit2 />
          <span>Edit</span>
        </Link>
      </div>

      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <div className={styles.iconBox}>
            <FiMail />
          </div>

          <div>
            <p className={styles.label}>Email</p>
            <p className={styles.value}>
              {personalInfo.contactEmail}
            </p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.iconBox}>
            <FiPhone />
          </div>

          <div>
            <p className={styles.label}>Phone</p>
            <p className={styles.value}>
              {personalInfo.phone}
            </p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.iconBox}>
            <FiMapPin />
          </div>

          <div>
            <p className={styles.label}>Location</p>
            <p className={styles.value}>
              {personalInfo.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;