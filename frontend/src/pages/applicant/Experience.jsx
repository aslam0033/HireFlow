import styles from "./experience.module.css";

function Experience() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Experience</h2>

      <div className={styles.card}>
        <h3>Frontend Developer Intern</h3>

        <p className={styles.company}>ABC Technologies Pvt. Ltd.</p>

        <div className={styles.details}>
          <span>Jan 2026 - Jun 2026</span>
          <span>Bengaluru, India</span>
        </div>

        <p className={styles.description}>
          Developed responsive web applications using React.js and integrated
          REST APIs. Collaborated with the development team to build reusable
          UI components, fix bugs, and improve application performance.
        </p>
      </div>
    </div>
  );
}

export default Experience;