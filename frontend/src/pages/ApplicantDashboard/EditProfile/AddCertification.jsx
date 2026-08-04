import {
  FiArrowLeft,
  FiSave,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import styles from "./addCertification.module.css";
import { useState } from "react";
import { useActionState } from "react";
import post from "../../../utils/post";

function AddCertification() {
  const navigate = useNavigate()
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });
  const handleFormData = async (prevData, formData) => {
    const certificationDetails = {
      name: formData.get("name"),
      issuingOrganization: formData.get("issuingOrganization"),
      certificateId: formData.get("credentialId"),
      certificateUrl: formData.get("credentialUrl"),
      issueDate: new Date(formData.get("issueDate")),
    }
    try {
      let url = "http://localhost:3500/add-certification"
      let response = await post(url, certificationDetails)
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
          navigate("/applicant/profile#certifications")
        }, 500);
      }
      else {
        setAlert({
          show: true,
          message: response.error,
          type: "error"
        })
        setTimeout(() => {
          setAlert({
            show: false,
            message: "",
            type: ""
          })
        }, 1000);
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
    <div className={styles.certificationOverlay}>
      <div className={styles.certificationContainer}>
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
        <div className={styles.pageHeader}>
          <div>
            <h1>Add Certification</h1>
            <p>
              Add a certification or professional credential to your profile.
            </p>
          </div>

          <Link
            to="/applicant/profile"
            className={styles.backButton}
          >
            <FiArrowLeft />
          </Link>
        </div>

        {/* Form */}
        <form className={styles.form} action={action}>

          {/* Certification Name */}
          <div className={styles.formGroup}>
            <label htmlFor="name">
              Certification Name <span>*</span>
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. JavaScript Algorithms and Data Structures"
            />
          </div>

          {/* Issuing Organization */}
          <div className={styles.formGroup}>
            <label htmlFor="issuingOrganization">
              Issuing Organization <span>*</span>
            </label>

            <input
              type="text"
              id="issuingOrganization"
              name="issuingOrganization"
              placeholder="e.g. freeCodeCamp"
            />
          </div>

          {/* Issue Date */}
          <div className={styles.formGroup}>
            <label htmlFor="issueDate">
              Issue Date <span>*</span>
            </label>

            <input
              type="date"
              id="issueDate"
              name="issueDate"
            />
          </div>

          {/* Credential ID */}
          <div className={styles.formGroup}>
            <label htmlFor="credentialId">
              Credential ID
            </label>

            <input
              type="text"
              id="credentialId"
              name="credentialId"
              placeholder="e.g. JS-2025-78432"
            />
          </div>

          {/* Credential URL */}
          <div className={styles.formGroup}>
            <label htmlFor="credentialUrl">
              Credential URL
            </label>

            <input
              type="url"
              id="credentialUrl"
              name="credentialUrl"
              placeholder="https://example.com/verify"
            />

            <small>
              Add a link where employers can verify your certification.
            </small>
          </div>

          {/* Form Actions */}
          <div className={styles.formActions}>
            <Link
              to="/applicant/profile#certifications"
              className={styles.cancelButton}
            >
              Cancel
            </Link>

            <button
              type="submit"
              className={styles.saveButton}
            >
              <FiSave />
              <span>Save Certification</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddCertification;
