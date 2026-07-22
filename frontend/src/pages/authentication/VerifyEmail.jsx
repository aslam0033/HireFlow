import { Link, useNavigate } from "react-router-dom";
import styles from "./verifyEmail.module.css";
import { useActionState } from "react";
import { useState } from "react";
import { useTransition } from "react";

function VerifyEmail() {
  //alert setting
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: ""
  });
  //variables
  const [resendInfo, setResentInfo] = useState(undefined)
  const navigate = useNavigate()

  //handling the form
  const handleform = async (prevData, formData) => {
    const email = sessionStorage.getItem("email")
    const otp = formData.get("otp")
    const reqBody = {
      otp: otp,
      email: email
    }
    //sending data to server
    try{
      let data = await fetch("http://localhost:3500/verify-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqBody)
    })
    data = await data.json()
    if (data.message) {
        setAlert({
          show: true,
          message: data.message,
          type: "success"
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      else {
        setAlert({
          show: true,
          message: data.error,
          type: "error"
        });
      }
    }
    catch (e) {
      setAlert({
        show: true,
        message: "Something went wrong. Please try again.",
        type: "error"
      });
    }
  }

  const handleResend = async () => {
    const user = JSON.parse(sessionStorage.getItem("user"))
    // sending data to backend
    try {
      let data = await fetch("http://localhost:3500/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      data = await data.json()
      if (data.message) {
        setAlert({
          show: true,
          message: data.message,
          type: "success"
        });
      }
      else {
        setAlert({
          show: true,
          message: data.error,
          type: "error"
        });
      }
    }
    catch (e) {
      setAlert({
        show: true,
        message: "Something went wrong. Please try again.",
        type: "error"
      });
    }
  }
  const [data, action, isPending] = useActionState(handleform, undefined)
  return (
    <div className={styles.verifyContainer}>
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
                type: ""
              })
            }
          >
            ×
          </button>
        </div>
      )}
      <div className={styles.verifyCard}>

        <h1 className={styles.heading}>
          Verify Your Email
        </h1>

        <p className={styles.subHeading}>
          We've sent a verification code to your email address.
          Enter the code below to activate your account.
        </p>

        <form className={styles.verifyForm} action={action}>

          <div className={styles.inputGroup}>
            <label>Verification Code</label>

            {data && (
              <span
                className={
                  data.message ? styles.successMessage : styles.errorMessage
                }
              >
                {data.message || data.error}
              </span>
            )}

            <input
              type="text"
              placeholder="Enter 6-digit code"
              maxLength={6}
              name="otp"
            />
          </div>

          <button className={styles.verifyButton}>
            Verify Email
          </button>

        </form>

        <div className={styles.links}>

          <button className={styles.resendButton} onClick={handleResend}>
            Resend Code
          </button>
        </div>

      </div>
    </div>
  );
}

export default VerifyEmail;