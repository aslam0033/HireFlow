import styles from "./projects.module.css";

function Projects() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Projects</h2>

      <div className={styles.card}>
        <h3>HireFlow - ATS Job Portal</h3>

        <p className={styles.techStack}>
          <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB
        </p>

        <p className={styles.description}>
          Developed a full-stack Applicant Tracking System (ATS) where
          recruiters can post jobs, manage applications, and applicants can
          create profiles, apply for jobs, and track their application status.
        </p>

        <div className={styles.links}>
          <a href="#">GitHub</a>
          <a href="#">Live Demo</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;