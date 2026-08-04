import React, { useActionState, useState } from "react";
import styles from "./addEducation.module.css";
import { Link, useNavigate } from "react-router-dom";
import post from "../../../utils/post";

const AddEducation = () => {
    const [isWorking,setIsworking] = useState(false)
    const navigate = useNavigate()
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "", 
  });
  const handleFormData = async (prevData, formData) => {
    const educationDetails = {
      degree:formData.get("degree"),
      institution: formData.get("institution"),
      fieldOfStudy: formData.get("fieldOfStudy"),
      startDate: new Date(formData.get("startDate")),
      endDate: new Date(formData.get("endDate")),
      grade: formData.get("grade"),
    }
    try {
      let url = "http://localhost:3500/add-education"
      let response = await post(url,educationDetails)
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
          navigate("/applicant/profile#education")
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
    <div className={styles.educationOverlay}>
      <div className={styles.educationContainer}>
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
          <h1>Add Education</h1>
          <p>
            Add your educational qualifications to showcase your academic
            background.
          </p>
        </div>

        {/* Form */}
        <form className={styles.form} action={action}>

          {/* Degree */}
          <div className={styles.formGroup}>
            <label htmlFor="degree">
              Degree / Qualification
            </label>

            <input
              type="text"
              id="degree"
              name="degree"
              placeholder="e.g. Bachelor of Computer Applications"
            />
          </div>

          {/* Institution */}
          <div className={styles.formGroup}>
            <label htmlFor="institution">
              Institution
            </label>

            <input
              type="text"
              id="institution"
              name="institution"
              placeholder="e.g. BLDEA'S College"
            />
          </div>

          {/* Field of Study */}
          <div className={styles.formGroup}>
            <label htmlFor="fieldOfStudy">
              Field of Study
            </label>

            <input
              type="text"
              id="fieldOfStudy"
              name="fieldOfStudy"
              placeholder="e.g. Computer Applications"
            />
          </div>

          {/* Dates */}
          <div className={styles.dateRow}>

            <div className={styles.formGroup}>
              <label htmlFor="startDate">
                Start Date
              </label>

              <input
                type="date"
                id="startDate"
                name="startDate"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="endDate">
                End Date
              </label>

              <input
                type="date"
                id="endDate"
                name="endDate"
              />
            </div>

          </div>

          {/* Grade */}
          <div className={styles.formGroup}>
            <label htmlFor="grade">
              Grade / CGPA / Percentage
            </label>

            <input
              type="text"
              id="grade"
              name="grade"
              placeholder="e.g. 8.5 CGPA or 85%"
            />
          </div>

          {/* Buttons */}
          <div className={styles.actions}>
            <Link to='/applicant/profile#education'
              className={styles.cancelButton}
            >
              Cancel
            </Link>

            <button
              type="submit"
              className={styles.saveButton}
            >
              Save Education
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddEducation;