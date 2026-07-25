import React from "react";
import styles from "./myApplications.module.css";

const MyApplications = () => {
  const applications = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova Solutions",
      location: "Bengaluru, India",
      type: "Full Time",
      appliedDate: "July 20, 2026",
      status: "Under Review",
    },
    {
      id: 2,
      title: "React Developer",
      company: "Innovate Labs",
      location: "Remote",
      type: "Full Time",
      appliedDate: "July 18, 2026",
      status: "Shortlisted",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "CodeCraft Technologies",
      location: "Pune, India",
      type: "Full Time",
      appliedDate: "July 15, 2026",
      status: "Interview",
    },
    {
      id: 4,
      title: "Software Developer Intern",
      company: "NextGen Systems",
      location: "Mumbai, India",
      type: "Internship",
      appliedDate: "July 10, 2026",
      status: "Rejected",
    },
    {
      id: 5,
      title: "JavaScript Developer",
      company: "WebSphere Technologies",
      location: "Hyderabad, India",
      type: "Full Time",
      appliedDate: "July 5, 2026",
      status: "Applied",
    },
  ];

  return (
    <div className={styles.applicationsPage}>

      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>My Applications</h1>

          <p>
            Track and manage all the jobs you have applied for.
          </p>
        </div>
      </div>


      {/* Application Statistics */}
      <div className={styles.statsGrid}>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            📄
          </div>

          <div>
            <p>Total Applications</p>
            <h2>12</h2>
          </div>
        </div>


        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            🔍
          </div>

          <div>
            <p>Under Review</p>
            <h2>4</h2>
          </div>
        </div>


        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            ⭐
          </div>

          <div>
            <p>Shortlisted</p>
            <h2>3</h2>
          </div>
        </div>


        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            🎤
          </div>

          <div>
            <p>Interviews</p>
            <h2>2</h2>
          </div>
        </div>


        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            ✕
          </div>

          <div>
            <p>Rejected</p>
            <h2>3</h2>
          </div>
        </div>

      </div>


      {/* Search and Filters */}
      <div className={styles.controls}>

        <div className={styles.searchBox}>

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search by job title or company"
          />

        </div>


        <select className={styles.statusFilter}>
          <option>All Applications</option>
          <option>Applied</option>
          <option>Under Review</option>
          <option>Shortlisted</option>
          <option>Interview</option>
          <option>Rejected</option>
        </select>


        <select className={styles.sortFilter}>
          <option>Newest First</option>
          <option>Oldest First</option>
        </select>

      </div>


      {/* Applications */}
      <div className={styles.applicationsContainer}>

        <div className={styles.resultsHeader}>
          <h2>My Applications</h2>

          <span>
            {applications.length} Applications
          </span>
        </div>


        <div className={styles.applicationsList}>

          {applications.map((application) => (

            <div
              className={styles.applicationCard}
              key={application.id}
            >

              {/* Application Header */}
              <div className={styles.applicationHeader}>

                <div className={styles.companyLogo}>
                  {application.company.charAt(0)}
                </div>


                <div className={styles.jobInfo}>

                  <h3>
                    {application.title}
                  </h3>

                  <p>
                    {application.company}
                  </p>

                </div>


                <span
                  className={`${styles.status} ${
                    styles[
                      application.status
                        .toLowerCase()
                        .replace(" ", "")
                    ]
                  }`}
                >
                  {application.status}
                </span>

              </div>


              {/* Application Details */}
              <div className={styles.applicationDetails}>

                <span>
                  📍 {application.location}
                </span>

                <span>
                  💼 {application.type}
                </span>

                <span>
                  📅 Applied on {application.appliedDate}
                </span>

              </div>


              {/* Application Footer */}
              <div className={styles.applicationFooter}>

                <span className={styles.applicationId}>
                  Application ID: #HF00{application.id}
                </span>


                <div className={styles.actions}>

                  <button className={styles.secondaryButton}>
                    View Job
                  </button>

                  <button className={styles.primaryButton}>
                    View Application
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default MyApplications;