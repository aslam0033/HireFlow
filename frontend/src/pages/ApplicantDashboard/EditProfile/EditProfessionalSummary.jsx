import { useActionState, useState } from "react";
import styles from "./editProfessionalSummary.module.css";
import { Link, useNavigate } from "react-router-dom";

function EditProfessionalSummary() {
    const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: ""
  })
  const navigate = useNavigate()
  const handleform = async (prevData, formData) => {
    const email = sessionStorage.getItem("loggedInEmail")
    const personalInfo = {
      loginEmail: email,
      summary:formData.get("summary")
    }
    try {
      let response = await fetch("http://localhost:3500/edit-professionalSummary", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(personalInfo)
      })
      response = await response.json()
      if (response.message) {
        setAlert({
          show: true,
          type: "success",
          message: response.message
        })
        setTimeout(() => {
          navigate("/applicant/profile")
        }, 1500);
      }
      else {
        setAlert({
          show: true,
          type: "error",
          message: response.error
        })
      }
    }
    catch (e) {
      setAlert({
        show: true,
        type: "error",
        message: "Something went wrong! please try again later"
      })
    }

  }
  const [data, action, isPending] = useActionState(handleform, undefined)

  return (
    <div className={styles.editOverlay}>
      <div className={styles.editContainer}>
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
          <div>
            <h2>Edit Professional Summary</h2>
            <p>
              Tell recruiters about your professional background and career goals.
            </p>
          </div>
        </div>

        {/* Form */}
        <form className={styles.form} action={action}>

          {/* Professional Summary */}
          <div className={styles.formGroup}>
            <label htmlFor="summary">
              Professional Summary
            </label>

            <textarea
              id="summary"
              name="summary"
              placeholder="Write a brief summary about your professional background, skills, experience, and career goals..."
              rows="7"
            ></textarea>

            <span className={styles.helperText}>
              Keep your summary clear, professional, and concise.
            </span>
          </div>

          {/* Buttons */}
          <div className={styles.buttonContainer}>
            <Link to='/applicant/profile'
              type="button"
              className={styles.cancelButton}
            >
              Cancel
            </Link>

            <button
              type="submit"
              className={styles.saveButton}
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default EditProfessionalSummary;