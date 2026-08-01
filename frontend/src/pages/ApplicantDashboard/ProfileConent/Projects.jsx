import { FiPlus, FiEdit2, FiExternalLink } from "react-icons/fi";
import styles from "./projects.module.css";
import { useState } from "react";

function Projects() {
  const[projects,SetProjects] = useState([])
  return (
    <div className={styles.projectsCard}>
      <div className={styles.cardHeader}>
        <h2>Projects</h2>

        <button className={styles.addButton}>
          <FiPlus />
          <span>Add Project</span>
        </button>
      </div>

      <div className={styles.projectsList}>
        {projects.map((project) => (
          <div
            className={styles.projectItem}
            key={project.id}
          >
            <div className={styles.projectHeader}>
              <h3>{project.name}</h3>

              <button className={styles.editButton}>
                <FiEdit2 />
              </button>
            </div>

            <p className={styles.description}>
              {project.description}
            </p>

            <div className={styles.technologies}>
              {project.technologies.map((technology, index) => (
                <span
                  className={styles.technologyTag}
                  key={index}
                >
                  {technology}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className={styles.projectLink}
            >
              <FiExternalLink />
              <span>View Project</span>
            </a>
          </div>
        ))}
      </div>

      {projects.length > 2 && (
        <button className={styles.viewAllButton}>
          View All Projects
        </button>
      )}
    </div>
  );
}

export default Projects;