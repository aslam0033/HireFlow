import React from 'react'
import ProfileHeader from '../ProfileConent/ProfileHeader'
import PersonalInfo from '../ProfileConent/PersonalInfo'
import ProfessionalSummary from '../ProfileConent/ProfessionalSummary'
import Skills from '../ProfileConent/Skills'
import Experience from '../ProfileConent/Experience'
import Education from '../ProfileConent/Education'
import Projects from '../ProfileConent/Projects'
import Certifications from '../ProfileConent/Certifications'
import Resume from '../ProfileConent/Resume'

function ApplicantProfile() {
  return (
    <div>
      <ProfileHeader/>
      <PersonalInfo/>
      <ProfessionalSummary/>
      <Skills/>
      <Experience/>
      <Education/>
      <Projects/>
      <Certifications/>
      <Resume/>
    </div>
  )
}

export default ApplicantProfile
