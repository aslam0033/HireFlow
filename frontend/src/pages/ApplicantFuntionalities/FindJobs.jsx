import { useEffect, useState } from "react";
import styles from "./findJobs.module.css";
import {
  FiSearch,
  FiMapPin,
  FiBriefcase,
  FiClock,
  FiDollarSign,
} from "react-icons/fi";



const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Bangalore, India",
    type: "Full-time",
    mode: "Hybrid",
    salary: "£30,000 - £40,000",
    skills: ["React", "JavaScript", "CSS"],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "React Developer",
    company: "CodeCraft Technologies",
    location: "Pune, India",
    type: "Full-time",
    mode: "Remote",
    salary: "£35,000 - £45,000",
    skills: ["React", "Redux", "Node.js"],
    posted: "3 days ago",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Innovate Labs",
    location: "Mumbai, India",
    type: "Full-time",
    mode: "On-site",
    salary: "£40,000 - £50,000",
    skills: ["React", "Node.js", "MongoDB"],
    posted: "5 days ago",
  },
  {
    id: 4,
    title: "Frontend Developer Intern",
    company: "StartUp Hub",
    location: "Remote",
    type: "Internship",
    mode: "Remote",
    salary: "£12,000 - £15,000",
    skills: ["HTML", "CSS", "JavaScript"],
    posted: "1 week ago",
  },
];


function FindJobs() {
  const [displayedJobs,setDisplayedJobs] = useState([])
  const [jobtype,setJobtype] = useState([])
  useEffect(()=>{
  setDisplayedJobs(jobsData)
},[])
useEffect(()=>{
  console.log(jobtype);
  
},[jobtype])

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1>Find Jobs</h1>
          <p>
            Search and discover opportunities that match your skills and
            experience.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className={styles.searchBox}>
        <div className={styles.searchInput}>
          <FiSearch />
          <input
            type="text"
            placeholder="Job title, skills or company"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className={styles.searchInput}>
          <FiMapPin />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button className={styles.searchButton}>
          <FiSearch />
          Search
        </button>
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        <select
          value={jobType}
          onChange={(e) => setJobtype(e.target.value)}
        >
          <option value="All">All Job Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
        </select>

        <select
          value={workMode}
          onChange={(e) => setWorkMode(e.target.value)}
        >
          <option value="All">All Work Modes</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-site">On-site</option>
        </select>
      </div>

      {/* Results Header */}
      <div className={styles.resultsHeader}>
        <h2>Recommended Jobs</h2>
        <span>{filteredJobs.length} jobs found</span>
      </div>

      {/* Job Cards */}
      <div className={styles.jobsContainer}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className={styles.jobCard} key={job.id}>
              <div className={styles.jobTop}>
                <div className={styles.companyLogo}>
                  {job.company.charAt(0)}
                </div>

                <div className={styles.jobInfo}>
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                </div>

                <span className={styles.posted}>{job.posted}</span>
              </div>

              <div className={styles.jobDetails}>
                <span>
                  <FiMapPin />
                  {job.location}
                </span>

                <span>
                  <FiBriefcase />
                  {job.type}
                </span>

                <span>
                  <FiClock />
                  {job.mode}
                </span>

                <span>
                  <FiDollarSign />
                  {job.salary}
                </span>
              </div>

              <div className={styles.skills}>
                {job.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className={styles.jobActions}>
                <button className={styles.detailsButton}>
                  View Details
                </button>

                <button className={styles.applyButton}>
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noJobs}>
            <FiSearch />
            <h3>No jobs found</h3>
            <p>
              Try changing your search keywords or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FindJobs;