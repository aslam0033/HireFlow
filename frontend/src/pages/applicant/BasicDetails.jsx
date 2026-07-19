import styles from "./basicDetails.module.css";

function BasicDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={styles.profileImage}
        />

        <div className={styles.details}>
          <h2>applicant.fullName</h2>

          <div className={styles.info}>
            <p>
              <strong>Email:</strong> applicant.email
            </p>

            <p>
              <strong>Phone:</strong> applicant.phone
            </p>

            <p>
              <strong>Location:</strong> applicant.location
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bioSection}>
        <h3>About</h3>
        <p>applicant.bio</p>
      </div>
    </div>
  );
}

export default BasicDetails;