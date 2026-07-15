import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./register.module.css";

function Register() {
  const [role, setRole] = useState("applicant");

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerCard}>
        <h1 className={styles.heading}>Create Account</h1>

        <p className={styles.subHeading}>
          Join HireFlow and start your career journey.
        </p>

        <form className={styles.registerForm}>
          <div className={styles.inputGroup}>
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Register As</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="applicant">Applicant</option>
              <option value="recruiter">Recruiter</option>
            </select>
          </div>

          <Link className={styles.registerButton} to='/verify-email'>Register</Link>
        </form>

        <div className={styles.links}>
          <p>
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;