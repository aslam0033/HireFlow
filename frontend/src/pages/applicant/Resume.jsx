import styles from "./resume.module.css";

function Resume() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Resume</h2>

      <div className={styles.card}>
        <div className={styles.info}>
          <h3>Aslam_Mujawar_Resume.pdf</h3>
          <p>Uploaded on: 17 July 2026</p>
        </div>

        <div className={styles.actions}>
          <button className={styles.viewBtn}>View Resume</button>
          <button className={styles.downloadBtn}>Download Resume</button>
        </div>
      </div>
    </div>
  );
}

export default Resume;