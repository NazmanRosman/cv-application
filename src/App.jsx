import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form.jsx'
import CV from './components/CV/CV.jsx'

function App() {
  const [personal, setPersonal] = useState({})
  const [educations, setEducations] = useState([])
  const [jobs, setJobs] = useState([])

  return (
    
    <div className="app-container">
      <div className="app">
        <h1 className="title">CV Maker</h1>
        <div className="form-cv-container">
          <Form setPersonal={setPersonal} setEducations={setEducations} setJobs={setJobs} class="form" />
          <CV personal={personal} educations={educations} jobs={jobs} class="cv" />
        </div>
      </div>
    </div>
  )
}

export default App
