import React, { useEffect, useState } from 'react'
import ProfileHeader from '../ProfileConent/ProfileHeader'
import PersonalInfo from '../ProfileConent/PersonalInfo'
import ProfessionalSummary from '../ProfileConent/ProfessionalSummary'
import Skills from '../ProfileConent/Skills'
import Experience from '../ProfileConent/Experience'
import Education from '../ProfileConent/Education'
import Projects from '../ProfileConent/Projects'
import Certifications from '../ProfileConent/Certifications'
import Resume from '../ProfileConent/Resume'
import post from '../../../utils/post'
import get from '../../../utils/get'

function ApplicantProfile() {
  const email = sessionStorage.getItem("loggedInEmail")
  const emailobj ={
    email:email
  }
  const [header,SetHeader] = useState({
      name:"",
      position:"",
      location:""
    })
  const [personalInfo,setPersonalInfo] = useState({
    contactEmail:"",
    phone:"",
    location:"",
  })
  const[summary,setSummary] = useState()
  const [skillsSet,SetSkills] = useState([])
  const [experiences,setExperiences] = useState([])
  const [education,setEducation] = useState([])
  const [projects,setProjects] = useState([])
  const [certifications,setCertifications] = useState([])

  useEffect(()=>{
    const scrollToHash = () => {
    const hash = window.location.hash;

    if (!hash) return;

    const elementId = hash.substring(1);

    setTimeout(() => {
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({
          behavior: "instant",
          block: "center",
        });
      }
    },100);
  }
  scrollToHash()
    const url = "http://localhost:3500/applicant-profile"
    const getData = async () =>{
    let response = await get(url);
    
    
    let data = response.data
    // header
      SetHeader({
        name:data.name,
        position:data.position,
        location:data.location
      })

      // personal Info
      setPersonalInfo({
        contactEmail:data.contactEmail,
        phone:data.phone,
        location:data.location
      })

      // summary
      setSummary(data.summary)
      
      //skills
      SetSkills(data.skills)

      //experiences
      setExperiences(data.experiences)

      //education
      setEducation(data.education)

      //projects
      setProjects(data.projects)

      //certifications
      setCertifications(data.certifications)
    }
    getData()
    
  },[])
  
  return (
    <div>
      <ProfileHeader header={header}/>
      <PersonalInfo personalInfo={personalInfo}/>
      <ProfessionalSummary summary={summary}/>
      <Skills skillsSet={skillsSet}/>
      <Experience experiences={experiences}/>
      <Education education={education}/>
      <Projects projects={projects}/>
      <Certifications certifications={certifications}/>
      <Resume/>
    </div>
  )
}

export default ApplicantProfile
