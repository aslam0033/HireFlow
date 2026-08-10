import { useEffect, useState } from "react";
import styles from "./welcomeSection.module.css";
import { FiSearch } from "react-icons/fi"; 
import { Link } from "react-router-dom";


function WelcomeSection({name}) {
  
  return (
    <section className={styles.welcomeSection}>

      <div className={styles.content}>
        <h1 className={styles.heading}>
          Welcome, {name}👋
        </h1>

        <p className={styles.description}>
          Track your job applications and discover new opportunities
          that match your skills.
        </p>
      </div>

      <Link  className={styles.findJobButton} to='/applicant/jobs'>
        <FiSearch />
        Find Jobs
      </Link>

    </section>
  );
}

export default WelcomeSection;