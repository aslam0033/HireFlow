import { useActionState, useState } from "react";
import styles from "./editSkills.module.css";
import { Link, useNavigate } from "react-router-dom";
import post from '../../../utils/post'

function EditSkills() {
    const [alert, setAlert] = useState({
        show: false,
        message: "",
        type: "", // success or error
    });
    const handleFormData = async (prevData, formData) => {
        const skill = formData.get("skill")
        const headerDetails = {
            skill:skill,
        }
        try{
            let url = "http://localhost:3500/add-skill"
            let response = await post(url,headerDetails)
        if(response.message){
            setAlert({
                show:true,
                message:response.message,
                type:"success"
            })
            setTimeout(() => {
                setAlert({
                    show:false,
                    message:"",
                    type:""
                })
            }, 1000);
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
    const [data,action,isPending] = useActionState(handleFormData, undefined)
    return (
        <div className={styles.editOverlay}>
            <div className={styles.editContainer}>
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
                <div className={styles.header}>
                    <div>
                        <h2>Edit Skills</h2>
                        <p>
                            Add the skills that best represent your professional expertise.
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className={styles.skillsSection}>

                    <label>Add Skills</label>

                    {/* Skill Input */}
                    <form className={styles.addSkillContainer} action={action}>
                        <input
                            type="text"
                            placeholder="Enter a skill"
                            name="skill"
                        />

                        <button
                            type="submit"
                            className={styles.addButton}
                        >
                            Add
                        </button>
                    </form>
                </div>

                {/* Buttons */}
                <div className={styles.buttonContainer}>
                    <Link to='/applicant/profile#skills'
                        type="button"
                        className={styles.saveButton}
                    >
                        Back
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default EditSkills;
