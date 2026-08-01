import { useActionState, useState } from "react";
import styles from "./editPersonalInfo.module.css";
import { Link, useNavigate } from "react-router-dom";

function EditPersonalInfo() {
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
      email: formData.get('email'),
      phone: formData.get('phone'),
      location: formData.get('location')
    }
    try {
      let response = await fetch("http://localhost:3500/edit-personalInfo", {
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
      <div className={styles.editContainer}>

        {/* Header */}
        <div className={styles.header}>
          <div>
            <h2>Edit Personal Information</h2>
            <p>Update your contact and location details.</p>
          </div>
        </div>

        {/* Form */}
        <form className={styles.form} action={action}>

          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone Number */}
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Location */}
          <div className={styles.formGroup}>
            <label htmlFor="location">Location</label>

            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter your location"
            />
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

export default EditPersonalInfo;