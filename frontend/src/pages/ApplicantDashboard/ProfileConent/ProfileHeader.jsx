import { FiEdit2, FiMapPin } from "react-icons/fi";
import styles from "./profileHeader.module.css";

function ProfileHeader() {
  const user = {
    name: "Aslam Mujawar",
    headline: "Full Stack Developer",
    location: "India",
    profilePhoto: "",
  };

  return (
    <div className={styles.profileCard}>
      <div className={styles.profileContent}>
        <div className={styles.profileImage}>
          {user.profilePhoto ? (
            <img
              src={user.profilePhoto}
              alt={user.name}
            />
          ) : (
            <span>
              {user.name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>

        <div className={styles.profileDetails}>
          <h1>{user.name}</h1>

          <p className={styles.headline}>
            {user.headline}
          </p>

          <div className={styles.location}>
            <FiMapPin />
            <span>{user.location}</span>
          </div>
        </div>
      </div>

      <button className={styles.editButton}>
        <FiEdit2 />
        <span>Edit</span>
      </button>
    </div>
  );
}

export default ProfileHeader;