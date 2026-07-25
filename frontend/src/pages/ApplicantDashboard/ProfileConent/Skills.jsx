import { FiPlus, FiX } from "react-icons/fi";
import styles from "./skills.module.css";

function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ];

  const visibleSkills = skills.slice(0, 4);

  return (
    <div className={styles.skillsCard}>
      <div className={styles.cardHeader}>
        <h2>Skills</h2>

        <button className={styles.addButton}>
          <FiPlus />
          <span>Add Skill</span>
        </button>
      </div>

      <div className={styles.skillsList}>
        {visibleSkills.map((skill, index) => (
          <div className={styles.skillRow} key={index}>
            <span className={styles.skillName}>
              {skill}
            </span>

            <button className={styles.removeButton}>
              <FiX />
            </button>
          </div>
        ))}
      </div>

      {skills.length > 4 && (
        <button className={styles.viewAllButton}>
          View All Skills
        </button>
      )}
    </div>
  );
}

export default Skills;