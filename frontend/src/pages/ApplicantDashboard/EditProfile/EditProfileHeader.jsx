import { useActionState, useState } from "react";
import styles from "./editProfileHeader.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import get from '../../../utils/get'
import post from '../../../utils/post'

function EditProfileHeader() {
    const[header,setHeader] = useState({
        name:"",
        position:"",
        location:""
    })
    const navigate = useNavigate()
    const [alert, setAlert] = useState({
        show: false,
        message: "",
        type: "", // success or error
    });
    useEffect(() => {
    try {
      const url = "http://localhost:3500/applicant-profile"
      const getData = async () => {
        let response = await get(url);
        let data = response.data
        setHeader({
          name:data.name,
          position:data.position,
          location:data.location
        })
      }
      getData()
    }
    catch (e) {
      setAlert({
        show:true,
        type:"error",
        message:"can't load data"
      })
    }
    
  },[])
    const handleFormData = async (prevData, formData) => {
        const fullname = formData.get("name")
        const position = formData.get("position")
        const location = formData.get("location")
        const headerDetails = {
            name: fullname,
            position: position,
            location: location,
        }
        try{
            let url = "http://localhost:3500/edit-header"
            let response = await post(url,headerDetails)
        if(response.message){
            setAlert({
                show:true,
                message:response.message,
                type:"success"
            })

            setTimeout(() => {
                navigate("/applicant/profile")
            }, 500);
        }
        else{
            setAlert({
                show:true,
                message:response.error,
                type:"error"
            })
            setTimeout(() => {
                setAlert({
                    show:false,
                    message:"",
                    type:""
                })
            }, 1500);
        }
        }
        catch(e){
            setAlert({
                show:true,
                message:"something went wrong! please try again later",
                type:"error"
            })
        }
    }
    const [data, action, isPending] = useActionState(handleFormData, undefined)
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
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
                                    type: "",
                                })
                            }
                        >
                            ×
                        </button>
                    </div>
                )}

                {/* Header */}
                <div className={styles.modalHeader}>
                    <div>
                        <h2>Edit Profile Header</h2>
                        <p>Update your basic profile information.</p>
                    </div>

                    <Link to="/applicant/profile"
                        type="button"
                        className={styles.closeButton}
                    >
                        ×
                    </Link>
                </div>

                <form action={action} >

                    {/* Profile Image */}
                    <div className={styles.imageSection}>
                        <div className={styles.profileImage}>
                        </div>

                        <button
                            type="button"
                            className={styles.changeImageButton}
                        >
                            Change Photo
                        </button>
                    </div>

                    {/* Form Fields */}
                    <div className={styles.formGroup}>
                        <label htmlFor="name">
                            Full Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            defaultValue={header?.name}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="position">
                            Position
                        </label>

                        <input
                            id="position"
                            type="text"
                            name="position"
                            defaultValue={header?.position}
                            placeholder="e.g. Frontend Developer"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="location">
                            Location
                        </label>

                        <input
                            id="location"
                            type="text"
                            name="location"
                            defaultValue={header?.location}
                            placeholder="e.g. Bangalore, India"
                        />
                    </div>

                    {/* Buttons */}
                    <div className={styles.actions}>
                        <Link to="/applicant/profile"
                            type="button"
                            className={styles.cancelButton}
                        >
                            Cancel
                        </Link>

                        <button 
                            type="submit"
                            className={styles.saveButton}
                        >
                            Save Changes
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default EditProfileHeader;