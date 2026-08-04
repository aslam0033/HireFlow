import { FiArrowLeft, FiSave, FiPlus, FiX } from "react-icons/fi";
import { Link, useActionData, useNavigate } from "react-router-dom";
import styles from "./addProject.module.css";
import { useActionState, useState } from "react";
import post from "../../../utils/post";

function AddProject() {
  const [alert, setAlert] = useState({
    message: "",
    type: "",
    show: false,
  });
  const [skill, setSkill] = useState();
  const navigate = useNavigate()
  const [skills, setSkills] = useState([]);

  //adding project
  const handleFormData = async (prevData, formData) => {
    try {
      const projectDetails = {
        title: formData.get("title"),
        description: formData.get("description"),
        skills: skills,
        startDate: new Date(formData.get("startDate")),
        endDate: new Date(formData.get("endDate")),
        projectUrl: formData.get("liveLink"),
      };
      console.log(skills);
      
      const url = "http://localhost:3500/add-project";
      const response = await post(url, projectDetails);
      if (response.message) {
        setAlert({
          show: true,
          message: response.message,
          type: "success",
        });
        setTimeout(() => {
          setAlert({
            show: false,
            message: "",
            type: "",
          });
          navigate("/applicant/profile#projects")
        }, 500);
      } else {
        setAlert({
          show: true,
          message: response.error,
          type: "error",
        });
      }
    } catch (e) {
      setAlert({
        show: true,
        message: "something went wrong! please try again later",
        type: "error",
      });
    }
  };
  const [data, action, isPending] = useActionState(handleFormData, undefined);
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {alert.show && (
          <div className={`${styles.alert} ${styles[alert.type]}`}>
            <span>{alert.message}</span>

            <button
              type="button"
              className={styles.closeAlert}
              onClick={() =>
                setAlert({
                  show: false,
                  message: "",
                  type: "",
                })
              }
            >
              ×
            </button>
          </div>
        )}

        {/* Header */}
        <div className={styles.header}>
          <Link to="/profile" className={styles.backButton}>
            <FiArrowLeft />
            <span>Back to Profile</span>
          </Link>

          <h1>Add Project</h1>

          <p>Add a project to showcase your skills and experience.</p>
        </div>

        {/* Form */}
        <form className={styles.form} action={action}>
          {/* Project Title */}
          <div className={styles.formGroup}>
            <label htmlFor="title">Project Title</label>

            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g. HireFlow"
            />
          </div>

          {/* Description */}
          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>

            <textarea
              id="description"
              name="description"
              placeholder="Describe your project, its purpose, and what you built..."
              rows="6"
            />
          </div>

          {/* Skills */}
          <div className={styles.formGroup}>
            <label htmlFor="skill">Skills Used</label>

            <div className={styles.skillInputWrapper}>
              <input
                type="text"
                onChange={(e) => setSkill(e.target.value)}
                id="skill"
                value={skill}
                placeholder="e.g. React"
              />

              <button
                type="button"
                onClick={() => {
                  setSkills([...skills, skill]);
                  setSkill("");
                }}
                className={styles.addSkillButton}
              >
                <FiPlus />
                <span>Add</span>
              </button>
            </div>

            <span className={styles.helperText}>
              Add each skill individually.
            </span>

            {/* Skills List */}
            <div className={styles.skillsList}>
              {skills.map((skill, index) => (
                <div className={styles.skillTag} key={index}>
                  <span>{skill}</span>

                  <button
                    type="button"
                    onClick={() => {
                      let newSkills = skills.filter((sk) => sk != skill);
                      setSkills(newSkills);
                    }}
                    className={styles.removeSkillButton}
                  >
                    <FiX />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Dates */}
          <div className={styles.dateRow}>
            <div className={styles.formGroup}>
              <label htmlFor="startDate">Start Date</label>

              <input type="date" id="startDate" name="startDate" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="endDate">End Date</label>

              <input type="date" id="endDate" name="endDate" />
            </div>
          </div>

          {/* Project Link */}
          <div className={styles.linksSection}>
            <div className={styles.formGroup}>
              <label htmlFor="liveLink">Live Project link</label>

              <input
                type="url"
                id="liveLink"
                name="liveLink"
                placeholder="https://yourproject.com"
              />
            </div>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <Link to="/applicant/profile#projects" className={styles.cancelButton}>
              Cancel
            </Link>

            <button type="submit" className={styles.saveButton}>
              <FiSave />
              <span>Save Project</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProject;
