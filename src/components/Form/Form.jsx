import { useState } from 'react'
import PersonalInput from './PersonalInput.jsx'
import JobInput from './JobInput.jsx'
import EducationInput from './EducationInput.jsx'
import './Form.css'

function Form({setPersonal, setJobs, setEducations}) {
  const [educationKeys, setEducationKeys] = useState([crypto.randomUUID()]);
  const [jobKeys, setJobKeys] = useState([crypto.randomUUID()]);


  function displayForms(keys, type){
    if(type === "education"){return keys.map((key)=><EducationInput setEducationKeys={setEducationKeys} educationKeys={educationKeys} setEducations={setEducations} id={key} key={key}/>)}
    if(type === "job"){return keys.map((key)=><JobInput setJobKeys={setJobKeys} setJobs={setJobs} id={key} key={key} jobKeys={jobKeys}/>)}
  }

  function addMore(type){
    if (type==="education"){
      setEducationKeys([...educationKeys, crypto.randomUUID()])
    }
    else if (type==="job"){
      setJobKeys([...jobKeys, crypto.randomUUID()])
    }
  }

  return (
    <div className="form-container">
      <div className="form-section">
        <h2>Personal Details</h2>
        <PersonalInput setPersonal={setPersonal}/>
      </div>

      <div className="form-section">
        <h2>Education</h2>
        {displayForms(educationKeys, "education")}
        <button onClick={()=>addMore("education")}>Add more</button>
      </div>

      <div className="form-section">
        <h2>Experience</h2>
        {displayForms(jobKeys, "job")}
        <button onClick={()=>addMore("job")}>Add more</button>
      </div>

    </div>
  )
}

export default Form
