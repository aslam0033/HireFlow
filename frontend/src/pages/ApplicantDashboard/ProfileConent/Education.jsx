import { FiPlus, FiEdit2, FiMapPin } from "react-icons/fi";
import styles from "./education.module.css";

function Education() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Applications",
      institution: "XYZ College",
      duration: "2023 - 2026",
      location: "Bangalore, India",
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      institution: "ABC Junior College",
      duration: "2021 - 2023",
      location: "Bangalore, India",
    },
    {
      id: 3,
      degree: "Secondary School Education",
      institution: "ABC High School",
      duration: "2011 - 2021",
      location: "Bangalore, India",
    },
  ];

  const visibleEducation = education.slice(0, 2);

  return (
    <div className={styles.educationCard}>
      <div className={styles.cardHeader}>
        <h2>Education</h2>

        <button className={styles.addButton}>
          <FiPlus />
          <span>Add Education</span>
        </button>
      </div>

      <div className={styles.educationList}>
        {visibleEducation.map((item) => (
          <div
            className={styles.educationItem}
            key={item.id}
          >
            <div className={styles.educationContent}>
              <div className={styles.titleRow}>
                <h3>{item.degree}</h3>

                <button className={styles.editButton}>
                  <FiEdit2 />
                </button>
              </div>

              <p className={styles.institution}>
                {item.institution}
              </p>

              <p className={styles.duration}>
                {item.duration}
              </p>

              <div className={styles.location}>
                <FiMapPin />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {education.length > 2 && (
        <button className={styles.viewAllButton}>
          View All Education
        </button>
      )}
    </div>
  );
}

export default Education;