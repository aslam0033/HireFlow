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
import EditProfileHeader from "./EditProfile/EditProfileHeader";
import EditPersonalInfo from "./EditProfile/EditPersonalInfo";
import EditProfessionalSummary from "./EditProfile/EditProfessionalSummary";
import EditSkills from "./EditProfile/EditSkills";
import AddExperience from "./EditProfile/AddExperience";
import EditExperence from "./EditProfile/EditExperence";
import AddEducation from "./EditProfile/AddEducation";
import EditEducation from "./EditProfile/EditEducation";
import AddProject from "./EditProfile/AddProject";
import EditProject from "./EditProfile/EditProject";
import AddCertification from "./EditProfile/AddCertification";
import EditCertification from "./EditProfile/EditCertification";

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

                {/* Editing */}
                <Route path="/edit-header" element={<EditProfileHeader/>}/>
                <Route path="/edit-personalInfo" element={<EditPersonalInfo/>}/>
                <Route path="/edit-professionalSummary" element={<EditProfessionalSummary/>}/>
                <Route path="/edit-skills" element={<EditSkills/>}/>
                <Route path="/add-experience" element={<AddExperience/>}/>
                <Route path="/edit-experience/:id" element={<EditExperence/>}/>
                <Route path="/add-education" element={<AddEducation/>}/>
                <Route path="/edit-education/:id" element={<EditEducation/>}/>
                <Route path="/add-project" element={<AddProject/>}/>
                <Route path="/edit-project/:id" element={<EditProject/>}/>
                <Route path="/add-certification" element={<AddCertification/>}/>
                <Route path="/edit-certification/:id" element={<EditCertification/>}/>
            </Routes>
        </main>

      </div>

    </div>
  );
}

export default Applicant;