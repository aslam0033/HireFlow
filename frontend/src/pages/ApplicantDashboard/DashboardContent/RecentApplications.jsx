import { Link } from "react-router-dom";
import styles from "./recentApplications.module.css";
import { useState } from "react";
import { useEffect } from "react";
import get from "../../../utils/get";

function RecentApplications() {
  const [applications, setApplications] = useState([])
  // useEffect(() => {
  //   const getData = async () => {
  //     let profile = await get("http://localhost:3500/appliedJobs")
  //     setApplications(profile.appliedJobs)
  //     // console.log(profile?.appliedJobs[0]?.job.title);
      
  //   }
  //   getData()
  // }, [])
  return (
    <section className={styles.card}>

      {/* Header */}
      <div className={styles.header}>

        <h2 className={styles.title}>
          Recent Applications
        </h2>

        <Link
          to="/applicant/applications"
          className={styles.viewAll}
        >
          View All →
        </Link>

      </div>


      {/* Applications Table */}
      <div className={styles.tableContainer}>

        <table className={styles.table}>

          <thead>
            <tr>
              <th>Job Position</th>
              <th>Company</th>
              <th>Applied On</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {applications?.map((application) => (

              <tr key={application.id}>

                <td className={styles.position}>
                  {application.title}
                </td>

                <td>
                  {application.company}
                </td>

                <td>
                  {new Date(application.appliedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>

                <td>
                  <span
                    className={`${styles.status} ${styles[application.status.toLowerCase()]
                      }`}
                  >
                    {application.status}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default RecentApplications;