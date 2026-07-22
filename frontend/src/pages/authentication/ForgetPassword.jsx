import { useActionState, useState } from "react";
import styles from "./forgetPassword.module.css";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  //alert setting
  const [alert,setAlert] = useState({
    show:false,
    type:"",
    message:""
  })

  // variables 
  const [otp, setOtp] = useState("");
  const [email,setEmail] = useState();
  const navigate = useNavigate();

  //handling the form
  const handleform = async (prevData, formData) => {
    setEmail(formData.get("email"))
    const data = {
      email: email
    }
    try{
      //sending data to server
      let response = await fetch("http://localhost:3500/getEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    response = await response.json()
    if (response.message) {
      sessionStorage.setItem("resetEmail", email)
      setAlert({
        show:true,
        type:"success",
        message:response.message
      })
    }
    else{
      setAlert({
        show:true,
        type:"error",
        message:response.error
      })
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
  //handeling the otp
  const handleotp = async () => {

    let email = sessionStorage.getItem("resetEmail")
    const data = {
      email: email,
      otp: otp,
    }

    //submitting otp for verification
    try{
      let response = await fetch("http://localhost:3500/verify-otp", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    response = await response.json()
    if (response.message) {
      sessionStorage.setItem("resetEmail", email)
      setAlert({
        show:true,
        type:"success",
        message:response.message
      })
      sessionStorage.setItem("isOtpVerified",true)
      setTimeout(() => {
        navigate("/reset-password")
      }, 2000);
    }
    else{
      setAlert({
        show:true,
        type:"error",
        message:response.error
      })
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
    <div className={styles.resetPasswordContainer}>
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
      <div className={styles.resetPasswordCard}>

        <h1 className={styles.heading}>
          Forget Password
        </h1>

        <p className={styles.subHeading}>
          Enter your registered email to receive an OTP.
        </p>

        <form className={styles.resetPasswordForm} action={action}>

          <div className={styles.inputGroup}>
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your registered email"
              name="email"
              defaultValue={email}

            />
          </div>

          <button
            type="submit"
            className={styles.primaryButton}
            disabled={isPending}
          >
            {isPending?"Sending the otp...":"Generate otp"}
          </button>
        </form>
        <form className={styles.resetPasswordForm}>
          <div className={styles.inputGroup}>
            <label>OTP</label>

            <input
              type="text"
              placeholder="Enter OTP"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              name="otp"
            />
          </div>

          <button
            type="button"
            className={styles.primaryButton}
            onClick={() => handleotp()}
          >
            Verify OTP
          </button>

        </form>

      </div>
    </div>
  );
}

export default ForgetPassword;