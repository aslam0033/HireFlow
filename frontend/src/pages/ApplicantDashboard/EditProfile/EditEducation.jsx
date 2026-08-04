import React, { useActionState, useEffect, useState } from "react";
import styles from "./editEducation.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import put from "../../../utils/put";
import get from "../../../utils/get";
import deleteRequest from "../../../utils/delete";
import { FiTrash2 } from "react-icons/fi";

const EditEducation = () => {
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "", // success or error
  });
  const navigate = useNavigate()
  const { id } = useParams()
  const [details, setDetails] = useState()
  useEffect(() => {
    const getData = async () => {
      try {
        let url = `http://localhost:3500/edit-education/${id}`
        let response = await get(url)
        if (response.data) {
          setDetails(response.data)
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
    getData()
  }, [])

  const formatMonth = (date) => {
    if (!date) return "";
    return new Date(date).toISOString().slice(0, 7);
  };


  const handleFormData = async (prevData, formData) => {
    try {
      const educationDetails = {
        degree: formData.get("degree"),
        institution: formData.get("institution"),
        fieldOfStudy: formData.get("fieldOfStudy"),
        startDate: new Date(formData.get("startDate")),
        endDate: new Date(formData.get("endDate")),
        grade: formData.get("grade"),
      }
      let url = `http://localhost:3500/edit-education/${id}`
      let response = await put(url, educationDetails)
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

  const handleDelete = async () => {
    try {
      let url = `http://localhost:3500/delete-Education/${id}`
      let response = await deleteRequest(url)
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
          <h2>Edit Education</h2>

          <p>
            Update your educational qualification and academic details.
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
              defaultValue={details?.degree}
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
              defaultValue={details?.institution}
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
              defaultValue={details?.fieldOfStudy}
            />
          </div>


          {/* Dates */}

          <div className={styles.dateRow}>

            <div className={styles.formGroup}>
              <label htmlFor="startDate">
                Start Date
              </label>

              <input
                type="month"
                id="startDate"
                name="startDate"
                defaultValue={formatMonth(details?.startDate)}
              />
            </div>


            <div className={styles.formGroup}>
              <label htmlFor="endDate">
                End Date
              </label>

              <input
                type="month"
                id="endDate"
                name="endDate"
                defaultValue={formatMonth(details?.endDate)}
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
              defaultValue={details?.grade}
            />
          </div>


          {/* Actions */}

          <div className={styles.actions}>

            <Link
              to='/applicant/profile#education'
              type="button"
              className={styles.cancelButton}
            >
              Cancel
            </Link>

            <button
              type="submit"
              className={styles.saveButton}
            >
              Update Education
            </button>

          </div>

        </form>
        <div className={styles.deleteSection}>
          <div className={styles.deleteContent}>
            <h3>Delete Education</h3>

            <p>
              Permanently remove this education from your profile. This
              action cannot be undone.
            </p>
          </div>

          <button onClick={() => handleDelete()}
            type="button" className={styles.deleteButton}>
            <FiTrash2 />
            <span>Delete education</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEducation;