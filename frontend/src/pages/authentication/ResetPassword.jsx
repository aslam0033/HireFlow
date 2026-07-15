import { useState } from "react";
import styles from "./resetPassword.module.css";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  return (
    <div className={styles.resetPasswordContainer}>
      <div className={styles.resetPasswordCard}>

        <h1 className={styles.heading}>
          Reset Password
        </h1>

        <p className={styles.subHeading}>
          Enter your registered email to receive an OTP.
        </p>

        <form className={styles.resetPasswordForm}>

          <div className={styles.inputGroup}>
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="button"
            className={styles.primaryButton}
          >
            Generate OTP
          </button>

          <div className={styles.inputGroup}>
            <label>OTP</label>

            <input
              type="text"
              placeholder="Enter OTP"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          <button
            type="button"
            className={styles.primaryButton}
          >
            Verify OTP
          </button>

        </form>

      </div>
    </div>
  );
}

export default ResetPassword;