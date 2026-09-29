import { useState } from 'react'

function EducationOutput({education}) {
  return (
    <>
      <div className="cv-section-header">
          <h4 className="school">{education.school}</h4>
          <div className="date">{education.startDate} - {education.endDate}</div>
      </div>
      <h5>{education.study}</h5>
      <div>{education.description}</div>
  
    </>
  )
}

export default EducationOutput
