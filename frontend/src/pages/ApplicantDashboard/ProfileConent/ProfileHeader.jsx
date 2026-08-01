import { FiEdit2, FiMapPin, FiBriefcase } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./profileHeader.module.css";

function ProfileHeader({ header }) {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileContent}>
        <div className={styles.profileImage}>
          {header.profilePhoto ? (
            <img
              src={header.profilePhoto}
              alt={header.name}
            />
          ) : (
            <span>
              {header.name?.charAt(0).toUpperCase()}
            </span>
          )}
        </div>

        <div className={styles.profileDetails}>
          <h1>{header.name ? header.name : "Name"}</h1>

          <p className={styles.headline}>
            {header.position ? header.position : "Position"}
          </p>

          <div className={styles.location}>
            <FiMapPin />
            <span>
              {header.location ? header.location : "Location"}
            </span>
          </div>
        </div>
      </div>

      <Link
        to="/applicant/edit-header"
        className={styles.editButton}
      >
        <FiEdit2 />
        <span>Edit</span>
      </Link>
    </div>
  );
}

export default ProfileHeader;