import styles from "./statCard.module.css";

function StatCard({ title, value, icon }) {
  return (
    <div className={styles.card}>

      <div className={styles.cardContent}>

        <p className={styles.title}>
          {title}
        </p>

        <h2 className={styles.value}>
          {value}
        </h2>

      </div>

      <div className={styles.iconContainer}>
        {icon}
      </div>

    </div>
  );
}

export default StatCard;