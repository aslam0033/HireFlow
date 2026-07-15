import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./login.module.css";

function Login() {

  const [role, setRole] = useState("applicant");

  return (
    <div className={styles.loginContainer}>

      <div className={styles.loginCard}>

        <h1 className={styles.heading}>
          Welcome Back
        </h1>

        <p className={styles.subHeading}>
          Login to continue to HireFlow
        </p>

        <form className={styles.loginForm}>

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
              placeholder="Enter your password"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Login As</label>

            <select
              value={role}
              onChange={(e)=>setRole(e.target.value)}
            >
              <option value="applicant">Applicant</option>
              <option value="recruiter">Recruiter</option>
            </select>

          </div>

          <button className={styles.loginButton}>
            Login
          </button>

        </form>

        <div className={styles.links}>

          <Link to="/reset-password">
            Forgot Password?
          </Link>

          <p>
            Don't have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;