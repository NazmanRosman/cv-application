import { useState } from 'react'

function JobInput({setJobKeys, jobKeys, setJobs, id}) {

  function save(e){
      e.preventDefault();
      let formData = new FormData(e.target); 

      let newJob = {
        id: id,
        company: formData.get("company"),
        job: formData.get("job"),
        description: formData.get("description"),
        startDate: formData.get("startDate"),
        endDate: formData.get("endDate"),
      };

      setJobs((prevJobs) =>{
        
        let existingJob = prevJobs.find((item)=> item.id===id);
        //if job already exists, remap whole thing but replace new job
        if (existingJob){
          return prevJobs.map((item) =>
            item.id === id ? newJob : item
           );
        }
        
        return  [...prevJobs, newJob]
      });
  }

  function remove(){
    setJobs((prevJobs)=>{
      let removed = prevJobs.filter((item)=> item.id !== id);
      return [...removed];
    }) 
    //if only one job form, dont delete key
    if(jobKeys.length > 1){
      setJobKeys((prevJobs)=>{
        let removed = prevJobs.filter((item)=> item !== id);
        return [...removed];
      }) 
    }
  }

  return (
  <form onSubmit={save}>
      <div className="individual-form-wrapper">
       Company: 
        <div><input name="company" placeholder="Company"></input></div>
        Job Title: 
        <div>
          <input name="job" placeholder="Job Title"></input></div>
        Job Description: 
        <div>
          <input name="description" placeholder="Job description"></input></div>
        <div>Start Date: <input name="startDate" type="date"></input></div>
        <div>End Date: <input name="endDate" type="date"></input></div>
        <div className="form-button-container">
  
          <button type="submit">Save</button>
          <button type="button" onClick={remove}>Delete</button>
          <button type="button">Edit</button>
        </div>
      </div>
  </form>
  )
}

export default JobInput
