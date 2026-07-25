import Sidebar from "./DashboardLayout/Sidebar";
import Navbar from "./DashboardLayout/Navbar";
import WelcomeSection from "./DashboardContent/WelcomeSection";
import styles from "./applicant.module.css";
import { Routes, Route } from 'react-router-dom'
import ApplicantDashboard from "./Features/ApplicantDashboard";
import ApplicantProfile from "./Features/ApplicantProfile";
import FindJobs from "./Features/FindJobs";
import MyApplications from "./Features/MyApplications";
import SavedJobs from "./Features/SavedJobs";

function Applicant() {
  return (
    <div className={styles.applicant}>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Area */}
      <div className={styles.mainSection}>

        {/* Navbar */}
        {/* <Navbar /> */}
        <Routes>

        </Routes>

        {/* Dashboard Content */}
        <main className={styles.content}>
            <Routes>
                <Route path="/dashboard?" element={<ApplicantDashboard/>}/>
                <Route path="/profile" element={<ApplicantProfile/>}/>
                <Route path="/jobs" element={<FindJobs/>}/>
                <Route path="/applications" element={<MyApplications/>}/>
                <Route path="/saved-jobs" element={<SavedJobs/>}/>
            </Routes>
        </main>

      </div>

    </div>
  );
}

export default Applicant;