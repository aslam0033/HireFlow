import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./login.module.css";
import { useActionState } from "react";

function Login() {
  //getting user details
  const [userData,setUserData] = useState({
    email:"",
    password:"",
    role:""
  })
  //alert setting
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: ""
  });
  //variables
  const navigate =  useNavigate()
  //handle form
  const handleForm = async (prevData,formData)=>{
    const email = formData.get("email")
    const password = formData.get("password")
    
    setUserData({
      email:email,
      password:password,
    })

    const user = {
      email:email,
      password:password,
    }

    //sending data to server
    try{
      let response = await fetch("http://localhost:3500/login",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(user)
    })
    response = await response.json();
    if(response.message){
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
  const [data,action,isPending]= useActionState(handleForm,undefined)


  return (
    <div className={styles.loginContainer}>
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
              autoComplete="email"
              defaultValue={userData.email}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              autoComplete="password"
              defaultValue={userData.password}
            />
          </div>
          <button className={styles.loginButton}>
            Login
          </button>

        </form>

        <div className={styles.links}>

          <Link to="/forget-password">
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