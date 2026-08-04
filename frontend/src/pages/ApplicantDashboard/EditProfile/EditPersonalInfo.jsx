import { useActionState, useState } from "react";
import styles from "./editPersonalInfo.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import get from '../../../utils/get'
import post from '../../../utils/post'

function EditPersonalInfo() {
  const[info,setInfo] = useState({
    contactEmail:"",
    phone:"",
    location:""
  })
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
        setInfo({
          contactEmail:data.contactEmail,
          phone:data.phone,
          location:data.location
        })
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
      email: formData.get('email'),
      phone: formData.get('phone'),
      location: formData.get('location')
    }
    try {
      let url = "http://localhost:3500/edit-personalInfo"
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
              defaultValue={info?.contactEmail}
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
              defaultValue={info?.phone}
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
              defaultValue={info?.location}
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