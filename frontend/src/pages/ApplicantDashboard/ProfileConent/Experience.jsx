import { FiPlus, FiEdit2, FiMapPin } from "react-icons/fi";
import styles from "./experience.module.css";

function Experience() {
  const experiences = [
    {
      id: 1,
      jobTitle: "Frontend Developer",
      company: "ABC Technologies",
      duration: "Jan 2025 - Present",
      location: "Bangalore, India",
      description:
        "Developing responsive web applications using React, JavaScript, and Tailwind CSS.",
    },
    {
      id: 2,
      jobTitle: "Web Development Intern",
      company: "XYZ Solutions",
      duration: "Jun 2024 - Dec 2024",
      location: "Remote",
      description:
        "Worked on frontend development and collaborated with the team to build user-friendly web applications.",
    },
    {
      id: 3,
      jobTitle: "Junior Web Developer",
      company: "Tech Company",
      duration: "Jan 2024 - May 2024",
      location: "Pune, India",
      description:
        "Built and maintained web pages using modern frontend technologies.",
    },
  ];

  const visibleExperiences = experiences.slice(0, 2);

  return (
    <div className={styles.experienceCard}>
      <div className={styles.cardHeader}>
        <h2>Experience</h2>

        <button className={styles.addButton}>
          <FiPlus />
          <span>Add Experience</span>
        </button>
      </div>

      <div className={styles.experienceList}>
        {visibleExperiences.map((experience) => (
          <div
            className={styles.experienceItem}
            key={experience.id}
          >
            <div className={styles.experienceContent}>
              <div className={styles.titleRow}>
                <h3>{experience.jobTitle}</h3>

                <button className={styles.editButton}>
                  <FiEdit2 />
                </button>
              </div>

              <p className={styles.company}>
                {experience.company}
              </p>

              <p className={styles.duration}>
                {experience.duration}
              </p>

              <div className={styles.location}>
                <FiMapPin />
                <span>{experience.location}</span>
              </div>

              <p className={styles.description}>
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {experiences.length > 2 && (
        <button className={styles.viewAllButton}>
          View All Experience
        </button>
      )}
    </div>
  );
}

export default Experience;