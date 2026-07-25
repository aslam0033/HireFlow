import { FiSearch, FiMapPin, FiBookmark, FiBriefcase } from "react-icons/fi";
import styles from "./savedjobs.module.css";

function SavedJobs() {
  const savedJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      type: "Full Time",
      salary: "₹18 - 25 LPA",
      savedOn: "2 days ago",
    },
    {
      id: 2,
      title: "React Developer",
      company: "Microsoft",
      location: "Hyderabad",
      type: "Remote",
      salary: "₹15 - 20 LPA",
      savedOn: "Yesterday",
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Amazon",
      location: "Pune",
      type: "Hybrid",
      salary: "₹20 - 28 LPA",
      savedOn: "Today",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>Saved Jobs</h1>
          <p>Jobs you've bookmarked for later.</p>
        </div>

        <div className={styles.searchBox}>
          <FiSearch />
          <input
            type="text"
            placeholder="Search saved jobs..."
          />
        </div>
      </div>

      <div className={styles.filters}>
        <button className={styles.active}>All</button>
        <button>Full Time</button>
        <button>Remote</button>
        <button>Hybrid</button>
      </div>

      <div className={styles.jobList}>
        {savedJobs.map((job) => (
          <div className={styles.card} key={job.id}>
            <div className={styles.top}>
              <div>
                <h2>{job.title}</h2>
                <p>{job.company}</p>
              </div>

              <button className={styles.bookmarkBtn}>
                <FiBookmark />
              </button>
            </div>

            <div className={styles.info}>
              <span>
                <FiMapPin />
                {job.location}
              </span>

              <span>
                <FiBriefcase />
                {job.type}
              </span>
            </div>

            <div className={styles.salary}>
              {job.salary}
            </div>

            <div className={styles.footer}>
              <span>Saved {job.savedOn}</span>

              <div className={styles.actions}>
                <button className={styles.viewBtn}>
                  View Details
                </button>

                <button className={styles.applyBtn}>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedJobs;