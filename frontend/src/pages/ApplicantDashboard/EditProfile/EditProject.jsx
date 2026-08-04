import { FiArrowLeft, FiSave, FiPlus, FiX, FiTrash2 } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./editProject.module.css";
import { useActionState, useEffect, useState } from "react";
import get from "../../../utils/get";
import put from "../../../utils/put";
import deleteRequest from "../../../utils/delete";

function EditProject() {
    const [skill, setSkill] = useState();
  const [skills, setSkills] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "", // success or error
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        let url = `http://localhost:3500/edit-project/${id}`;
        let response = await get(url);
        if (response.data) {
          setDetails(response.data);
          setSkills(response.data.skills)
        } else {
          setAlert({
            show: true,
            message: response.error,
            type: "error",
          });
        }
      } catch (e) {
        setAlert({
          show: true,
          message: "something went wrong! please try again later",
          type: "error",
        });
      }
    };
    getData();
  }, []);

  const formatMonth = (date) => {
    if (!date) return "";
    return new Date(date).toISOString().slice(0, 7);
  };

  const handleFormData = async (prevData, formData) => {
    try {
      const projectDetails = {
        title: formData.get("title"),
        description: formData.get("description"),
        skills: skills,
        startDate: new Date(formData.get("startDate")),
        endDate: new Date(formData.get("endDate")),
        projectUrl: formData.get("liveLink"),
      };
      let url = `http://localhost:3500/edit-project/${id}`;
      let response = await put(url, projectDetails);
      if (response.message) {
        setAlert({
          show: true,
          message: response.message,
          type: "success",
        });
        setTimeout(() => {
          setAlert({
            show: false,
            message: "",
            type: "",
          });
          navigate("/applicant/profile#projects")
        }, 500);
      } else {
        setAlert({
          show: true,
          message: response.error,
          type: "error",
        });
      }
    } catch (e) {
      setAlert({
        show: true,
        message: "something went wrong! please try again later",
        type: "error",
      });
    }
  };
  const [data, action, isPending] = useActionState(handleFormData, undefined);

  const handleDelete = async () => {
    try {
      let url = `http://localhost:3500/delete-project/${id}`;
      let response = await deleteRequest(url);
      if (response.message) {
        setAlert({
          show: true,
          message: response.message,
          type: "success",
        });
        setTimeout(() => {
          setAlert({
            show: false,
            message: "",
            type: "",
          });
          navigate("/applicant/profile#projects");
        }, 500);
      } else {
        setAlert({
          show: true,
          message: response.error,
          type: "error",
        });
      }
    } 
    catch (e) {
      setAlert({
        show: true,
        message: "something went wrong! please try again later",
        type: "error",
      });
    }
  };
  return (
    <div className={styles.page} >
      <div className={styles.container}>
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
          <h1>Edit Project</h1>

          <p>Update your project details and skills.</p>
        </div>

        {/* Form */}
        <form className={styles.form} action={action}>
          {/* Project Title */}
          <div className={styles.formGroup}>
            <label htmlFor="title">Project Title</label>

            <input
              type="text"
              id="title"
              name="title"
              defaultValue={details?.title}
              placeholder="e.g. HireFlow"
            />
          </div>

          {/* Description */}
          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>

            <textarea
              id="description"
              name="description"
              defaultValue={details?.description}
              placeholder="Describe your project, its purpose, and what you built..."
              rows="6"
            />
          </div>

          {/* Skills */}
          <div className={styles.formGroup}>
            <label htmlFor="skill">Skills Used</label>

            <div className={styles.skillInputWrapper}>
              <input type="text" id="skill" 
              onChange={(e)=>{setSkill(e.target.value)}}
              placeholder="e.g. React" />

              <button 
              onClick={()=>setSkills([...skills,skill])}
              type="button" className={styles.addSkillButton}>
                <FiPlus />
                <span>Add</span>
              </button>
            </div>

            <span className={styles.helperText}>
              Add each skill individually.
            </span>

            {/* Skills List */}
            <div className={styles.skillsList}>
              {skills.map((skill, index) => (
                <div className={styles.skillTag} key={index}>
                  <span>{skill}</span>

                  <button
                    type="button"
                    onClick={() => {
                      let newSkills = skills.filter((sk) => sk != skill);
                      setSkills(newSkills);
                    }}
                    className={styles.removeSkillButton}
                  >
                    <FiX />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Dates */}
          <div className={styles.dateRow}>
            <div className={styles.formGroup}>
              <label htmlFor="startDate">Start Date</label>

              <input
                type="month"
                id="startDate"
                name="startDate"
                defaultValue={formatMonth(details?.startDate)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="endDate">End Date</label>

              <input
                type="month"
                id="endDate"
                name="endDate"
                defaultValue={formatMonth(details?.endDate)}
              />
            </div>
          </div>

          {/* Project Link */}
          <div className={styles.linksSection}>
            <div className={styles.formGroup}>
              <label htmlFor="projectUrl">Live Project Link</label>

              <input
                type="url"
                id="projectUrl"
                name="liveLink"
                defaultValue={details?.projectUrl}
                placeholder="https://yourproject.com"
              />
            </div>
          </div>

          {/* Update / Cancel Actions */}
          <div className={styles.actions}>
            <Link to="/applicant/profile#projects" className={styles.cancelButton}>
              Cancel
            </Link>

            <button type="submit" className={styles.saveButton}>
              <FiSave />
              <span>Update Project</span>
            </button>
          </div>
        </form>

        {/* Delete Section */}
        <div className={styles.deleteSection}>
          <div className={styles.deleteContent}>
            <h2>Delete Project</h2>

            <p>
              Once you delete this project, it cannot be recovered. Please make
              sure you want to continue.
            </p>
          </div>

          <button 
          onClick={()=>handleDelete()}
           type="button" className={styles.deleteButton}>
            <FiTrash2 />
            <span>Delete Project</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProject;
