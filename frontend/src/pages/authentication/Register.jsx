import { Link, useNavigate } from "react-router-dom";
import { useActionState, useState } from "react";
import styles from "./register.module.css";

function Register() {
  // role storing
  const [role, setRole] = useState("applicant");

  //navigation
  const navigate = useNavigate();

  //handling the form
  const handleForm = async (prevData, formData) => {
    // getting data from form
    const fullname = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    //creating user object
    const user = {
      fullname: fullname,
      email: email,
      password: password,
      role: role
    }

    //sending data to backend
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
        sessionStorage.setItem("email", email)
        sessionStorage.setItem("user", JSON.stringify(user))
        console.log(data.message);
        navigate('/verify-email')
      }
      else {
        console.log(data.error);

      }
    }
    catch (e) {
      return e;
    }
  }


  const [data, action, pending] = useActionState(handleForm, undefined)


  return (

    <div className={styles.registerContainer}>
      {pending && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Sending OTP. Please wait...</p>
        </div>
      )}
      {
        !pending && <div className={styles.registerCard}>
        <h1 className={styles.heading}>Create Account</h1>

        <p className={styles.subHeading}>
          Join HireFlow and start your career journey.
        </p>

        <form className={styles.registerForm} action={action}>
          <div className={styles.inputGroup}>
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              name="name"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
              name="password"
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

          <button className={styles.registerButton}  >{pending ? "Sending the otp" : "Register"}</button>
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
      }
    </div>
  );
}

export default Register;