import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiBriefcase,
  FiDollarSign,
  FiBookmark,
} from "react-icons/fi";

import styles from "./recommendedJobs.module.css";
import { useEffect, useState } from "react";

function RecommendedJobs() {
  const [jobs,setJobs] = useState([])
  useEffect(()=>{
    const getJobs = async () => {
      let jobs = await fetch("http://localhost:3500/recommendedJobs")
      jobs = await jobs.json()
      setJobs(jobs.jobs);
    }
    getJobs();
  },[])
  return (
    <section className={styles.section}>

      {/* Header */}
      <div className={styles.header}>

        <div>
          <h2 className={styles.title}>
            Recommended Jobs
          </h2>

          <p className={styles.subtitle}>
            Jobs that match your skills and interests.
          </p>
        </div>

        <Link
          to="/jobs"
          className={styles.viewAll}
        >
          View All →
        </Link>

      </div>


      {/* Jobs */}
      <div className={styles.jobsContainer}>

        {jobs?.map((job) => (

          <div
            className={styles.jobCard}
            key={job._id}
          >

            {/* Job Header */}
            <div className={styles.jobHeader}>

              <div className={styles.companyIcon}>
                {job.company.charAt(0)}
              </div>

              <button className={styles.bookmarkButton}>
                <FiBookmark />
              </button>

            </div>


            {/* Job Information */}
            <div className={styles.jobInfo}>

              <h3 className={styles.jobTitle}>
                {job.title}
              </h3>

              <p className={styles.company}>
                {job.company}
              </p>

            </div>


            {/* Job Details */}
            <div className={styles.details}>

              <span>
                <FiMapPin />
                {job.location}
              </span>

              <span>
                <FiBriefcase />
                {job.type}
              </span>

              <span>
                <FiDollarSign />
                {job.salary}
              </span>

            </div>


            {/* Skills */}
            <div className={styles.skills}>

              {job.skills.map((skill) => (

                <span
                  key={skill}
                  className={styles.skill}
                >
                  {skill}
                </span>

              ))}

            </div>


            {/* View Job */}
            <Link
              to={`/jobs/${job.id}`}
              className={styles.viewJobButton}
            >
              View Job
            </Link>

          </div>

        ))}

      </div>

    </section>
  );
}

export default RecommendedJobs;