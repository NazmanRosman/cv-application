import { useState } from 'react'

function PersonalOutput({personal}) {

  return (
    <div>
   
          <h2 className="full-name">{personal.name}</h2>
          <div>{personal.email}</div>
          <div>{personal.phone}</div>
    </div>

  )
}

export default PersonalOutput
