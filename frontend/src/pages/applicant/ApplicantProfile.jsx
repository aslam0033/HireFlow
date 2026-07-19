import React from 'react'
import BasicDetails from './BasicDetails'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Resume from './Resume'
import Skills from './Skills'
import SocialLinks from './SocialLinks'

function ApplicantProfile() {
  return (
    <div>
      <BasicDetails/>
      <Education/>
      <Experience/>
      <Projects/>
      <Resume/>
      <Skills/>
      <SocialLinks/>
    </div>
  )
}

export default ApplicantProfile
