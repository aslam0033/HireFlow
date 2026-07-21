import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./login.module.css";
import { useActionState } from "react";

function Login() {
  const [role, setRole] = useState("applicant");
  const navigate =  useNavigate()
  const handleForm = async (prevData,formData)=>{
    const email = formData.get("email")
    const password = formData.get("password")
    
    const credentials = {
      email:email,
      password:password,
      role:role
    }
    let response = await fetch("http://localhost:3500/login",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(credentials)
    })
    response = await response.json();
    if(response.message){
      console.log(response.message);
      
      navigate("/profile")
    }
    else{
      console.log(response.error);
      
    }
    return response;
  }
  const [data,action,isPending]= useActionState(handleForm,undefined)


  return (
    <div className={styles.loginContainer}>

      <div className={styles.loginCard}>

        <h1 className={styles.heading}>
          Welcome Back
        </h1>

        <p className={styles.subHeading}>
          Login to continue to HireFlow
        </p>

        <form className={styles.loginForm} action={action}>

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
              placeholder="Enter your password"
              name="password"
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