import { useState } from 'react'

function JobOutput({job}) {
  return (
    <>
      <div className="cv-section-header">
        <h4>{job.company}</h4>
        <div className="date">{job.startDate} - {job.endDate}</div>
      </div>

        <h5>{job.job}</h5>
        <div>{job.description}</div>

    </>
  )
}

export default JobOutput
