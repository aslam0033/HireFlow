import {
  FiPlus,
  FiEdit2,
  FiMapPin,
  FiBriefcase,
} from "react-icons/fi";
import styles from "./experience.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Experience({ experiences }) {
  const [experiencesList, setExperiencesList] = useState(
    experiences || []
  );
  

  useEffect(() => {
    setExperiencesList(experiences || []);
  }, [experiences]);
  const [showall, setShowall] = useState(false);
  const displayExperiences = showall
    ? experiencesList.sort((a, b) => a.position.localeCompare(b.position))
    : experiencesList.sort((a, b) => a.position.localeCompare(b.position)).slice(0, 2);

  return (
    <div className={styles.experienceCard} id="experience">
      <div className={styles.cardHeader}>
        <h2>Experience</h2>

        <Link
          className={styles.addButton}
          to="/applicant/add-experience"
        >
          <FiPlus />
          <span>Add Experience</span>
        </Link>
      </div>

      <div className={styles.experienceList}>
        {displayExperiences.map((experience, index) => (
          <div
            className={styles.experienceItem}
            key={index}
          >
            {/* Timeline */}
            <div className={styles.timeline}>
              <div className={styles.timelineDot}></div>

              {index !== displayExperiences.length - 1 && (
                <div className={styles.timelineLine}></div>
              )}
            </div>

            {/* Experience Details */}
            <div className={styles.experienceContent}>
              <div className={styles.titleRow}>
                <div>
                  <h3>{experience.position}</h3>

                  <p className={styles.company}>
                    {experience.company}
                  </p>
                </div>

                <Link
                  to={`/applicant/edit-experience/${experience._id}`}
                  className={styles.editButton}
                >
                  <FiEdit2 />
                </Link>
              </div>

              <p className={styles.jobType}>
                {experience.jobType}
              </p>

              {/* Experience Time */}
              <p className={styles.experienceTime}>
                <FiBriefcase />
                <span>
                  {experience.experienceTime}{" "}
                  {experience.experienceTime == 1
                    ? "year"
                    : "years"}{" "}
                </span>
              </p>
              <div className={styles.duration}>
                <span>
                {experience.currentlyWorking?"Currently working":""}
              </span>
              </div>

              <div className={styles.location}>
                <FiMapPin />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {experiencesList.length > 2 && (
        <button
          className={styles.viewAllButton}
          onClick={() => setShowall(!showall)}
        >
          {showall ? "View Less" : "View More"}
        </button>
      )}
    </div>
  );
}

export default Experience;