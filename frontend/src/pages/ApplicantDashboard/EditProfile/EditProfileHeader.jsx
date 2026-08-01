import { useActionState, useState } from "react";
import styles from "./editProfileHeader.module.css";
import { Link, useNavigate } from "react-router-dom";

function EditProfileHeader() {
    const navigate = useNavigate()
    const [alert, setAlert] = useState({
        show: false,
        message: "",
        type: "", // success or error
    });
    const handleFormData = async (prevData, formData) => {
        const fullname = formData.get("name")
        const position = formData.get("position")
        const location = formData.get("location")
        const email = sessionStorage.getItem("loggedInEmail")
        const headerDetails = {
            name: fullname,
            position: position,
            location: location,
            email: email
        }
        try{
            let response = await fetch("http://localhost:3500/edit-header", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(headerDetails)
        })
        response = await response.json()
        if(response.message){
            setAlert({
                show:true,
                message:response.message,
                type:"success"
            })

            setTimeout(() => {
                navigate("/applicant/profile")
            }, 2000);
        }
        else{
            setAlert({
                show:true,
                message:response.error,
                type:"error"
            })
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