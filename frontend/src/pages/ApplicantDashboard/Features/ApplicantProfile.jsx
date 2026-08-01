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
  
  useEffect(()=>{
     const getData = async() => {
    try{
      let data = await fetch("http://localhost:3500/applicant-profile",{
        method:"POST",
        headers:{
          "content-type" : "application/json"
        },
        body:JSON.stringify(emailobj)
      })
      data = await data.json()
      data = data.data
      
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
      
    }
    catch(e){
      message:"Something went wrong please try agin"
    }
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
      <Education/>
      <Projects/>
      <Certifications/>
      <Resume/>
    </div>
  )
}

export default ApplicantProfile
