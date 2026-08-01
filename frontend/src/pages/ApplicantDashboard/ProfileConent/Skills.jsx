import { FiPlus, FiX } from "react-icons/fi";
import styles from "./skills.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Skills({ skillsSet }) {
  const [skills, setSkills] = useState(skillsSet || []);
  const [showAll, setShowAll] = useState(false);

  // Update local skills whenever parent sends new skills
  useEffect(() => {
    setSkills(skillsSet || []);
  }, [skillsSet]);

  const displayedSkills = showAll
    ? skills
    : skills.slice(0, 3);

  const handleRemove = async (skill) => {
    const email = sessionStorage.getItem("loggedInEmail");

    const skillObj = {
      skill: skill,
      email: email
    };

    try {
      let response = await fetch(
        "http://localhost:3500/delete-skill",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(skillObj)
        }
      );

      // You were missing await here
      response = await response.json();

      if (response.message) {
        // Remove deleted skill from local state
        setSkills((prevSkills) => prevSkills.filter(
            (currentSkill) => currentSkill !== skill
          )
        );
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  return (
    <div className={styles.skillsCard}>
      <div className={styles.cardHeader}>
        <h2>Skills</h2>

        <Link
          className={styles.addButton}
          to="/applicant/edit-skills"
        >
          <FiPlus />
          <span>Add Skill</span>
        </Link>
      </div>

      <div className={styles.skillsList}>
        {displayedSkills.map((skill, index) => (
          <div className={styles.skillRow} key={index}>
            <span className={styles.skillName}>
              {skill}
            </span>

            <button
              className={styles.removeButton}
              onClick={() => handleRemove(skill)}
            >
              <FiX />
            </button>
          </div>
        ))}
      </div>

      {skills.length > 3 && (
        <button
          className={styles.viewAllButton}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All Skills"}
        </button>
      )}
    </div>
  );
}

export default Skills;