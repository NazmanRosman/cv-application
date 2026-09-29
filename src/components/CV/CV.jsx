import { useState } from 'react'
import PersonalOutput from './PersonalOutput.jsx'
import EducationOutput from './EducationOutput.jsx'
import JobOutput from './JobOutput.jsx'
import './CV.css'

function CV({personal, jobs, educations}) {

  return (
    <div className="cv-container">
      <div className="cv">
        <div className="personal-cv">
          {(personal && Object.keys(personal).length > 0) ?
            <div>
              
              <PersonalOutput personal={personal}/>
      
            </div>
            : null
          }
    
    
        </div>
        <div className="education cv-section">
          {(educations && educations.length >0) 
          ? <h3>Education</h3> : null
          }
          
          {(educations && educations.length >0)
            ? educations.map((education)=>  
              <div className="entry" key={education.id} >
                <EducationOutput education={education} />
              </div>          
            ): null
          }
        </div>
  
        <div className="job cv-section">
          {(jobs && jobs.length >0) 
          ? <h3>Experience</h3> : null
          }
          {(jobs && jobs.length >0)
            ? jobs.map((job)=>
              <div className="entry" key={job.id} >
                <JobOutput job={job}  />
              </div>
              )
            : null
          }
        </div>
  
      </div>
    </div>
  )
}

export default CV
