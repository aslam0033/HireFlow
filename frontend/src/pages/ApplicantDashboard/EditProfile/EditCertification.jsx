import { FiArrowLeft, FiSave, FiTrash2 } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./editCertification.module.css";
import get from "../../../utils/get";
import put from "../../../utils/put";
import deleteRequest from "../../../utils/delete";
import { useState } from "react";
import { useActionState } from "react";
import { useEffect } from "react";

function EditCertification({ certification }) {
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
        let url = `http://localhost:3500/edit-certification/${id}`;
        let response = await get(url);
        if (response.data) {
          setDetails(response.data);
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
      const certificationDetails = {
        name: formData.get("name"),
        issuingOrganization: formData.get("issuingOrganization"),
        issueDate: new Date(formData.get("issueDate")),
        certificateId: formData.get("certificateId"),
        certificateUrl: formData.get("certificateUrl"),
      };
      let url = `http://localhost:3500/edit-certification/${id}`;
      let response = await put(url, certificationDetails);
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
          navigate("/applicant/profile#certifications")
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
      let url = `http://localhost:3500/delete-certificate/${id}`;
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
          navigate("/applicant/profile#certifications");
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
  return (
    <div className={styles.certificationOverlay}>
      <div className={styles.certificationContainer}>
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
        <div className={styles.pageHeader}>
          <div>
            <h1>Edit Certification</h1>
            <p>Update your certification or professional credential.</p>
          </div>

          <Link to="/applicant/profile" className={styles.backButton}>
            <FiArrowLeft />
          </Link>
        </div>

        {/* Form */}
        <form className={styles.form} action={action}>
          {/* Certification Name */}
          <div className={styles.formGroup}>
            <label htmlFor="name">
              Certification Name <span>*</span>
            </label>

            <input
              type="text"
              id="name"
              name="name"
              defaultValue={details?.name || ""}
              placeholder="e.g. JavaScript Algorithms and Data Structures"
            />
          </div>

          {/* Issuing Organization */}
          <div className={styles.formGroup}>
            <label htmlFor="issuingOrganization">
              Issuing Organization <span>*</span>
            </label>

            <input
              type="text"
              id="issuingOrganization"
              name="issuingOrganization"
              defaultValue={details?.issuingOrganization || ""}
              placeholder="e.g. freeCodeCamp"
            />
          </div>

          {/* Issue Date */}
          <div className={styles.formGroup}>
            <label htmlFor="issueDate">
              Issue Date <span>*</span>
            </label>

            <input
              type="date"
              id="issueDate"
              name="issueDate"
              defaultValue={
                details?.issueDate
                  ? new Date(details.issueDate)
                      .toISOString()
                      .split("T")[0]
                  : ""
              }
            />
          </div>

          {/* Credential ID */}
          <div className={styles.formGroup}>
            <label htmlFor="certificateId">Credential ID</label>

            <input
              type="text"
              id="certificateId"
              name="certificateId"
              defaultValue={details?.certificateId || ""}
              placeholder="e.g. JS-2025-78432"
            />
          </div>

          {/* Credential URL */}
          <div className={styles.formGroup}>
            <label htmlFor="certificateUrl">Credential URL</label>

            <input
              type="url"
              id="certificateUrl"
              name="certificateUrl"
              defaultValue={details?.certificateUrl || ""}
              placeholder="https://example.com/verify"
            />

            <small>
              Add a link where employers can verify your certification.
            </small>
          </div>

          {/* Save / Cancel */}
          <div className={styles.formActions}>
            <Link to="/applicant/profile#certifications" className={styles.cancelButton}>
              Cancel
            </Link>

            <button type="submit" className={styles.saveButton}>
              <FiSave />
              <span>Save Changes</span>
            </button>
          </div>

          {/* Delete Section */}
          <div className={styles.deleteSection}>
            <div className={styles.deleteContent}>
              <h3>Delete Certification</h3>

              <p>
                Permanently remove this certification from your profile. This
                action cannot be undone.
              </p>
            </div>

            <button onClick={()=>handleDelete()}
            type="button" className={styles.deleteButton}>
              <FiTrash2 />
              <span>Delete Certification</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCertification;
