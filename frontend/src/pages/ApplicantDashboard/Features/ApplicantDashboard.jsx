import React from 'react'
import WelcomeSection from '../DashboardContent/WelcomeSection'
import StatsCards from '../DashboardContent/StatsCards'
import RecentApplications from '../DashboardContent/RecentApplications'
import RecommendedJobs from '../DashboardContent/RecommendedJobs'
import ProfileCompletion from '../DashboardContent/ProfileCompletion'

function ApplicantDashboard() {
  return (
    <div>
      <WelcomeSection/>
      <ProfileCompletion/>
      <StatsCards/>
      <RecentApplications/>
      <RecommendedJobs/>
    </div>
  )
}

export default ApplicantDashboard
