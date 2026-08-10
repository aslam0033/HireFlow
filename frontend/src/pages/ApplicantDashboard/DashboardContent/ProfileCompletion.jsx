import { Link } from "react-router-dom";
import styles from "./profileCompletion.module.css";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

function ProfileCompletion({percentage}) {

  return (
    <section className={styles.card}>

      {/* Header */}
      <div className={styles.header}>

        <div>
          <h2 className={styles.title}>
            Profile Completion
          </h2>

          <p className={styles.subtitle}>
            Complete your profile to improve your chances of getting noticed
            by recruiters.
          </p>
        </div>

        <div className={styles.percentage}>
          {percentage}%
        </div>

      </div>


      {/* Progress Bar */}
      <div className={styles.progressContainer}>

        <div
          className={styles.progressBar}
          style={{
            width: `${percentage}%`,
          }}
        ></div>

      </div>


      {/* Profile Status */}
      <div className={styles.statusContainer}>

        <div className={styles.statusText}>
          <FiCheckCircle />

          <span>
            Your profile is almost complete
          </span>
        </div>

        <Link
        to='/applicant/profile'
         className={styles.completeButton}>
          Complete Profile

          <FiArrowRight />

        </Link>

      </div>

    </section>
  );
}

export default ProfileCompletion;