import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./addExperience.module.css";
import { useActionState, useState } from "react";

function AddExperience() {
  const [isWorking,setIsworking] = useState(false)
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "", // success or error
  });
  const handleFormData = async (prevData, formData) => {
    const position = formData.get("position")
    const company = formData.get("company")
    const location = formData.get("location")
    const startDate = new Date(formData.get("startDate"))
    const endDate = new Date(formData.get("endDate"))
    const jobType = formData.get("jobType")
    const description = formData.get("description")
    const email = sessionStorage.getItem("loggedInEmail")
    const experienceDetails = {
      email: email,
      position: position,
      company: company,
      location: location,
      jobType:jobType,
      startDate: startDate,
      endDate: endDate,
      isWorking: isWorking,
      description: description,
    }
    try {
      let response = await fetch("http://localhost:3500/add-experience", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(experienceDetails)
      })
      response = await response.json()
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
        }, 1000);
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
              to="/applicant/profile"
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