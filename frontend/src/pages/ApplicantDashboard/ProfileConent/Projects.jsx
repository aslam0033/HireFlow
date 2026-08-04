import { FiPlus, FiEdit2, FiExternalLink } from "react-icons/fi";
import styles from "./projects.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Projects({ projects }) {
  const [showAll,setShowAll] = useState(false)
  const displayedProjects = showAll?projects:projects.slice(0,2)
  return (
    <div className={styles.projectsCard} id="projects">
      <div className={styles.cardHeader}>
        <h2>Projects</h2>

        <Link
        to='/applicant/add-project'
         className={styles.addButton}>
          <FiPlus />
          <span>Add Project</span>
        </Link>
      </div>

      <div className={styles.projectsList}>
        {displayedProjects.map((project) => (
          <div
            className={styles.projectItem}
            key={project._id}
          >
            <div className={styles.projectHeader}>
              <div>
                <h3>{project.title}</h3>

                <p className={styles.projectDuration}>
                  {project.startDate} - {project.endDate}
                </p>
              </div>

              <Link
              to={`/applicant/edit-project/${project._id}`}
               className={styles.editButton}>
                <FiEdit2 />
              </Link>
            </div>

            <p className={styles.description}>
              {project.description}
            </p>

            <div className={styles.skills}>
              <span className={styles.skillsLabel}>Skills:</span>

              <div className={styles.skillsList}>
                {project.skills.map((skill, index) => (
                  <span
                    className={styles.skillTag}
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.projectUrl}
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink />
              <span>View Project</span>
            </a>
          </div>
        ))}
      </div>

      {projects.length > 2 && (
        <button onClick={()=>setShowAll(!showAll)}
        className={styles.viewAllButton}>
          {showAll?"view less":"view more"}
        </button>
      )}
    </div>
  );
}

export default Projects;