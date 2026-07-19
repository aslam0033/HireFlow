import styles from "./socialLinks.module.css";

function SocialLinks() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Social Links</h2>

      <div className={styles.linksContainer}>
        <a href="#" className={styles.link}>
          GitHub
        </a>

        <a href="#" className={styles.link}>
          LinkedIn
        </a>

        <a href="#" className={styles.link}>
          Portfolio
        </a>

        <a href="#" className={styles.link}>
          LeetCode
        </a>

        <a href="#" className={styles.link}>
          Codeforces
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;