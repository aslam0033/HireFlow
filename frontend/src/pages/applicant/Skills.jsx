import styles from "./skills.module.css";

function Skills() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Skills</h2>

      <div className={styles.skillsContainer}>
        <span className={styles.skillBadge}>HTML</span>
        <span className={styles.skillBadge}>CSS</span>
        <span className={styles.skillBadge}>JavaScript</span>
        <span className={styles.skillBadge}>React</span>
        <span className={styles.skillBadge}>Node.js</span>
        <span className={styles.skillBadge}>Express.js</span>
        <span className={styles.skillBadge}>MongoDB</span>
        <span className={styles.skillBadge}>MySQL</span>
        <span className={styles.skillBadge}>Tailwind CSS</span>
        <span className={styles.skillBadge}>Git</span>
        <span className={styles.skillBadge}>GitHub</span>
      </div>
    </div>
  );
}

export default Skills;