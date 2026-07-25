import { FiPlus, FiEdit2, FiExternalLink } from "react-icons/fi";
import styles from "./projects.module.css";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "HireFlow",
      description:
        "A full-stack job portal and ATS platform that connects applicants and recruiters.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      name: "Quiz Application",
      description:
        "A real-time quiz application where users can participate in live quizzes.",
      technologies: ["React", "Node.js", "Socket.io", "Redis"],
      link: "#",
    },
    {
      id: 3,
      name: "Admin Dashboard",
      description:
        "A responsive admin dashboard for monitoring and visualizing application data.",
      technologies: ["React", "Tailwind CSS", "Recharts"],
      link: "#",
    },
  ];

  const visibleProjects = projects.slice(0, 2);

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
        {visibleProjects.map((project) => (
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