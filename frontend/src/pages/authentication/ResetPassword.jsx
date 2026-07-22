import { useActionState, useState } from "react";
import styles from "./resetPassword.module.css";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  //alert setting
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: ""
  });
  //navigation
  const navigate = useNavigate();

  //handling the form
  const handleForm = async (prevData, formData) => {
    let previousPassword = formData.get("previousPassword")
    let newPassword = formData.get("newPassword")
    let email = sessionStorage.getItem('resetEmail')

    const passData = {
      previousPassword: previousPassword,
      newPassword: newPassword,
      email: email
    }

    try{
      let response = await fetch("http://localhost:3500/reset-password", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(passData)
    })
    response = await response.json()

    if (response.message) {
      setAlert({
        show: true,
        message: response.message,
        type: "success"
      });
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    }
    else {
      setAlert({
        show: true,
        message: response.error,
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
  const [data, action, isPending] = useActionState(handleForm, undefined);
  return (
    <div className={styles.container}>
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
      <div className={styles.formContainer}>
        <h2>Reset Password</h2>

        <form action={action}>
          <div className={styles.inputGroup}>
            <label htmlFor="previousPassword">
              Previous Password
            </label>

            <input
              type="password"
              id="previousPassword"
              name="previousPassword"
              placeholder="Enter your previous password"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="newPassword">
              New Password
            </label>

            <input
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="Enter your new password"
            />
          </div>

          <button type="submit">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;