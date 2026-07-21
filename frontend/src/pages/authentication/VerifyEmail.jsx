import { Link, useNavigate } from "react-router-dom";
import styles from "./verifyEmail.module.css";
import { useActionState } from "react";
import { useState } from "react";
import { useTransition } from "react";

function VerifyEmail() {
  const[resendInfo,setResentInfo] = useState(undefined)
  const navigate = useNavigate()
  const[pending,setPending] = useTransition()
  const handleform = async (prevData, formData) => {
    const email = sessionStorage.getItem("email")
    const otp = formData.get("otp")
    const reqBody = {
      otp: otp,
      email: email
    }
    let response = await fetch("http://localhost:3500/verify-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqBody)
    })
    response = await response.json()
    navigate("/login")
    return response;
  }

  const handleResend = async()=>{
    const user = JSON.parse(sessionStorage.getItem("user"))
    // sending data to backend
    setPending(async()=>{
      try{
      let data = await fetch ("http://localhost:3500/register",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(user)
    })
    data = await data.json()
    if(data.message){
      return setResentInfo(data.message)
    }
    else{
      return setResentInfo(data.error)
    }
    } 
    catch(e){
      return e;
    }
    })
  } 
  const [data, action, isPending] = useActionState(handleform, undefined)
  return (
    <div className={styles.verifyContainer}>
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
          <h4 className={styles.successMessage}>{pending?"resending the otp...":resendInfo && resendInfo}</h4>

        </div>

      </div>
    </div>
  );
}

export default VerifyEmail;