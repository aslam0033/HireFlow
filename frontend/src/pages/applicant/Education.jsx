import styles from "./education.module.css";

function Education() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Education</h2>

      <div className={styles.card}>
        <h3 className={styles.degree}>
          Bachelor of Computer Applications (BCA)
        </h3>

        <p className={styles.institution}>
          BLDEA'S Commerce, BHS Arts & TGP Science College
        </p>

        <div className={styles.details}>
          <span>2024 - 2027</span>
          <span>CGPA: 8.9</span>
        </div>

        <p className={styles.description}>
          Studying Computer Applications with a focus on web development,
          databases, data structures, and software engineering.
        </p>
      </div>
    </div>
  );
}

export default Education;