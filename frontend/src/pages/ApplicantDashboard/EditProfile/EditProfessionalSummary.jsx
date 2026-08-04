import { useActionState, useEffect, useState } from "react";
import styles from "./editProfessionalSummary.module.css";
import { Link, useNavigate } from "react-router-dom";
import get from '../../../utils/get'
import post from '../../../utils/post'

function EditProfessionalSummary() {
  const [summary,setSummary] = useState()
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: ""
  })
  useEffect(() => {
    try {
      const url = "http://localhost:3500/applicant-profile"
      const getData = async () => {
        let response = await get(url);
        let data = response.data
        setSummary(data.summary)
      }
      getData()
    }
    catch (e) {
      setAlert({
        show:true,
        type:"error",
        message:"can't load data"
      })
    }
    
  },[])
  const navigate = useNavigate()
  const handleform = async (prevData, formData) => {
    const personalInfo = {
      summary: formData.get("summary")
    }
    try {
      let url = "http://localhost:3500/edit-professionalSummary"
      let response = await post(url,personalInfo)
      if (response.message) {
        setAlert({
          show: true,
          type: "success",
          message: response.message
        })
        setTimeout(() => {
          navigate("/applicant/profile")
        }, 500);
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
              defaultValue={summary}
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