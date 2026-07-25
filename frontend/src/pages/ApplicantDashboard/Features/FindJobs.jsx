import React from "react";
import styles from "./findJobs.module.css";

const FindJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova Solutions",
      location: "Bengaluru, India",
      mode: "Hybrid",
      type: "Full Time",
      salary: "₹6 - ₹10 LPA",
      posted: "2 days ago",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      id: 2,
      title: "React Developer",
      company: "Innovate Labs",
      location: "Remote",
      mode: "Remote",
      type: "Full Time",
      salary: "₹8 - ₹12 LPA",
      posted: "3 days ago",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "CodeCraft Technologies",
      location: "Pune, India",
      mode: "On-site",
      type: "Full Time",
      salary: "₹10 - ₹15 LPA",
      posted: "5 days ago",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 4,
      title: "Software Developer Intern",
      company: "NextGen Systems",
      location: "Mumbai, India",
      mode: "Hybrid",
      type: "Internship",
      salary: "₹20,000 - ₹30,000 / month",
      posted: "1 week ago",
      skills: ["JavaScript", "React", "Git"],
    },
  ];

  return (
    <div className={styles.findJobsPage}>

      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Find Jobs</h1>
          <p>
            Discover opportunities that match your skills and career goals.
          </p>
        </div>
      </div>


      {/* Search Section */}
      <div className={styles.searchSection}>

        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>⌕</span>

          <input
            type="text"
            placeholder="Search jobs by title, skill, or company"
          />
        </div>

        <div className={styles.locationBox}>
          <span>📍</span>

          <input
            type="text"
            placeholder="Location"
          />
        </div>

        <button className={styles.searchButton}>
          Search
        </button>

      </div>


      {/* Main Content */}
      <div className={styles.content}>

        {/* Filters */}
        <aside className={styles.filters}>

          <div className={styles.filterHeader}>
            <h2>Filters</h2>

            <button className={styles.clearButton}>
              Clear All
            </button>
          </div>


          {/* Job Type */}
          <div className={styles.filterGroup}>
            <h3>Job Type</h3>

            <label>
              <input type="checkbox" />
              Full Time
            </label>

            <label>
              <input type="checkbox" />
              Part Time
            </label>

            <label>
              <input type="checkbox" />
              Internship
            </label>

            <label>
              <input type="checkbox" />
              Contract
            </label>
          </div>


          {/* Work Mode */}
          <div className={styles.filterGroup}>
            <h3>Work Mode</h3>

            <label>
              <input type="checkbox" />
              Remote
            </label>

            <label>
              <input type="checkbox" />
              Hybrid
            </label>

            <label>
              <input type="checkbox" />
              On-site
            </label>
          </div>


          {/* Experience */}
          <div className={styles.filterGroup}>
            <h3>Experience Level</h3>

            <label>
              <input type="checkbox" />
              Fresher
            </label>

            <label>
              <input type="checkbox" />
              Entry Level
            </label>

            <label>
              <input type="checkbox" />
              Mid Level
            </label>

            <label>
              <input type="checkbox" />
              Senior Level
            </label>
          </div>


          {/* Salary */}
          <div className={styles.filterGroup}>
            <h3>Salary Range</h3>

            <label>
              <input type="checkbox" />
              ₹0 - ₹5 LPA
            </label>

            <label>
              <input type="checkbox" />
              ₹5 - ₹10 LPA
            </label>

            <label>
              <input type="checkbox" />
              ₹10 - ₹20 LPA
            </label>

            <label>
              <input type="checkbox" />
              ₹20+ LPA
            </label>
          </div>

        </aside>


        {/* Job Results */}
        <main className={styles.jobsContainer}>

          <div className={styles.resultsHeader}>
            <h2>Recommended Jobs</h2>

            <select>
              <option>Most Relevant</option>
              <option>Newest First</option>
              <option>Salary: High to Low</option>
              <option>Salary: Low to High</option>
            </select>
          </div>


          {/* Job Cards */}
          <div className={styles.jobsList}>

            {jobs.map((job) => (

              <div className={styles.jobCard} key={job.id}>

                {/* Job Card Header */}
                <div className={styles.jobHeader}>

                  <div className={styles.companyLogo}>
                    {job.company.charAt(0)}
                  </div>

                  <div className={styles.jobTitleContainer}>
                    <h3>{job.title}</h3>

                    <p>{job.company}</p>
                  </div>

                  <button
                    className={styles.saveButton}
                    title="Save Job"
                  >
                    ♡
                  </button>

                </div>


                {/* Job Details */}
                <div className={styles.jobDetails}>

                  <span>📍 {job.location}</span>

                  <span>💼 {job.type}</span>

                  <span>🏢 {job.mode}</span>

                  <span>💰 {job.salary}</span>

                </div>


                {/* Skills */}
                <div className={styles.skills}>

                  {job.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>


                {/* Footer */}
                <div className={styles.jobFooter}>

                  <span className={styles.posted}>
                    Posted {job.posted}
                  </span>

                  <button className={styles.viewButton}>
                    View Details
                  </button>

                </div>

              </div>

            ))}

          </div>

        </main>

      </div>

    </div>
  );
};

export default FindJobs;