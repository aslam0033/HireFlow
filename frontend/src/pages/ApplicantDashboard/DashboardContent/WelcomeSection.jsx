import styles from "./welcomeSection.module.css";
import { FiSearch } from "react-icons/fi"; 
import { Link } from "react-router-dom";

function WelcomeSection() {
  return (
    <section className={styles.welcomeSection}>

      <div className={styles.content}>
        <h1 className={styles.heading}>
          Welcome back, Aslam 👋
        </h1>

        <p className={styles.description}>
          Track your job applications and discover new opportunities
          that match your skills.
        </p>
      </div>

      <Link  className={styles.findJobButton} to='/find-jobs'>
        <FiSearch />
        Find Jobs
      </Link>

    </section>
  );
}

export default WelcomeSection;