import { FiPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import styles from "./addExperience.module.css";
import { useActionState, useState } from "react";
import post from "../../../utils/post";

function AddExperience() {
  const [isWorking,setIsworking] = useState(false)
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "", 
  });
  const navigate = useNavigate()
  const handleFormData = async (prevData, formData) => {
    const experienceDetails = {
      position:formData.get("position"),
      company: formData.get("company"),
      location: formData.get("location"),
      jobType:formData.get("jobType"),
      startDate: new Date(formData.get("startDate")),
      endDate: new Date(formData.get("endDate")),
      isWorking: isWorking,
      description: formData.get("description"),
    }
    try {
      let url = "http://localhost:3500/add-experience"
      let response = await post(url,experienceDetails)
      if (response.message) {
        setAlert({
          show: true,
          message: response.message,
          type: "success"
        })
        setTimeout(() => {
          setAlert({
            show: false,
            message: "",
            type: ""
          })
          navigate("/applicant/profile#experience")
        }, 500);
      }
      else {
        setAlert({
          show: true,
          message: response.error,
          type: "error"
        })
      }
    }
    catch (e) {
      setAlert({
        show: true,
        message: "something went wrong! please try again later",
        type: "error"
      })
    }
  }
  const [data, action, isPending] = useActionState(handleFormData, undefined)
  return (
    <div className={styles.experienceOverlay}>
      <div className={styles.experienceContainer}>
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

        <div className={styles.header}>
          <h2>Add Experience</h2>
          <p>
            Add your professional experience to your profile.
          </p>
        </div>

        <form className={styles.form} action={action}>

          <div className={styles.formGroup}>
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="position"
              placeholder="e.g. Frontend Developer"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="e.g. Google"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="e.g. Bengaluru, Karnataka"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="jobType">job-type</label>
            <select
              type="text"
              id="jobType"
              name="jobType"
              placeholder="e.g.full-time"
            >
              <option value="partTime">Part time</option>
              <option value="fullTime">Full time</option>
              <option value="internship">Internship</option>
              <option value="selfEmployed">Self employed</option>
              <option value="freelancer">freelancer</option>
            </select>
          </div>

          <div className={styles.dateRow}>
            <div className={styles.formGroup}>
              <label htmlFor="startDate">Start Date</label>
              <input
                type="month"
                id="startDate"
                name="startDate"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="endDate">End Date</label>
              <input
                type="month"
                id="endDate"
                name="endDate"
              />
            </div>
          </div>

          <label className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="isWorking"
              onClick={()=>setIsworking(!isWorking)}
            />
            <span>I am currently working in this role</span>
          </label>

          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              placeholder="Describe your responsibilities, achievements, and key contributions..."
            ></textarea>
          </div>

          <div className={styles.actions}>
            <Link
              to="/applicant/profile#experience"
              className={styles.cancelButton}
            >
              Cancel
            </Link>

            <button
              type="submit"
              className={styles.saveButton}
            >
              <FiPlus />
              Add Experience
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default AddExperience;