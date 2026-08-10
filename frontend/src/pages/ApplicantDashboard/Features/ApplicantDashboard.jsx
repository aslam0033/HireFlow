import React, { useEffect, useState } from 'react'
import WelcomeSection from '../DashboardContent/WelcomeSection'
import StatsCards from '../DashboardContent/StatsCards'
import RecentApplications from '../DashboardContent/RecentApplications'
import RecommendedJobs from '../DashboardContent/RecommendedJobs'
import ProfileCompletion from '../DashboardContent/ProfileCompletion'
import get from '../../../utils/get'
import calculateProfileCompletion from './calculateProfileCompletion'

function ApplicantDashboard() {
  const [name,setName] = useState();
  const [percentage,setPercentage] = useState(0);
  useEffect(()=>{

  },[percentage])
  useEffect( () => {
     const getData = async () => {
       const url = "http://localhost:3500/applicant-profile";
      let profile = await get(url)
      profile = profile.data
      //name
      setName(profile.name)
      
      //percentage
      setPercentage(calculateProfileCompletion(profile))
     }
     getData()
    }, []);
  return (
    <div>
      <WelcomeSection name={name}/>
      <ProfileCompletion percentage={percentage}/>
      <StatsCards/>
      <RecentApplications/>
      <RecommendedJobs/>
    </div>
  )
}

export default ApplicantDashboard
