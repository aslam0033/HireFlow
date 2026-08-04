import { FiPlus, FiEdit2, FiBookOpen } from "react-icons/fi";
import styles from "./education.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Education({ education }) {
  const [showAll,setShowAll] = useState(false)
  const displayedEducation = showAll?
  education:
  education.slice(0,2)

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className={styles.educationCard} id="education">

      <div className={styles.cardHeader}>
        <h2>Education</h2>

        <Link
          to="/applicant/add-education"
          className={styles.addButton}
        >
          <FiPlus />
          <span>Add Education</span>
        </Link>
      </div>


      <div className={styles.educationList}>

        {displayedEducation.map((item) => (

          <div
            className={styles.educationItem}
            key={item._id}
          >

            <div className={styles.educationIcon}>
              <FiBookOpen />
            </div>


            <div className={styles.educationContent}>

              <div className={styles.titleRow}>

                <div>
                  <h3>{item.degree}</h3>

                  <p className={styles.institution}>
                    {item.institution}
                  </p>
                </div>

                <Link
                to={`/applicant/edit-education/${item._id}`}
                 className={styles.editButton}>
                  <FiEdit2 />
                </Link>

              </div>


              {item.fieldOfStudy && (
                <p className={styles.fieldOfStudy}>
                  {item.fieldOfStudy}
                </p>
              )}


              <div className={styles.educationDetails}>

                <span className={styles.duration}>
                  {formatDate(item.startDate)}
                  {" - "}
                  {formatDate(item.endDate)}
                </span>


                {item.grade && (
                  <span className={styles.grade}>
                    Grade: {item.grade}
                  </span>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>


      {education.length > 2 && (
        <button 
        onClick={()=>setShowAll(!showAll)}
        className={styles.viewAllButton}>
          {showAll?"view less":"view more"}
        </button>
      )}

    </div>
  );
}

export default Education;