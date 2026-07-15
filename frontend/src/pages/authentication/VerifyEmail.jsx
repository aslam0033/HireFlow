import { Link } from "react-router-dom";
import styles from "./verifyEmail.module.css";

function VerifyEmail() {
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

        <form className={styles.verifyForm}>

          <div className={styles.inputGroup}>
            <label>Verification Code</label>

            <input
              type="text"
              placeholder="Enter 6-digit code"
              maxLength={6}
            />
          </div>

          <button className={styles.verifyButton}>
            Verify Email
          </button>

        </form>

        <div className={styles.links}>

          <button className={styles.resendButton}>
            Resend Code
          </button>

        </div>

      </div>
    </div>
  );
}

export default VerifyEmail;