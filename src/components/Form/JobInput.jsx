import { useState } from 'react'

function JobInput({setJobKeys, jobKeys, setJobs, id}) {
  const [closing, setClosing] = useState(false);

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

      //send data to cv.jsx
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
    if(jobKeys.length > 1){
        setClosing(true);
    }

    //delete data from cv.jsx
    setJobs((prevJobs)=>{
        let removed = prevJobs.filter((item)=> item.id !== id);
        return [...removed];
    }) 
    //if only one education form, dont delete key
    setTimeout(()=>{
        if(jobKeys.length > 1){
            setJobKeys((prevJobs)=>{
                let removed = prevJobs.filter((item)=> item !== id);
                return [...removed];
            }) 
        }
    }, 300);
}
    
  return (
  <div className={`individual-form-wrapper ${closing ? "closing" : ""}`}>  
    <form onSubmit={save}>
      
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
      </form>
    </div>
  
  )
}

export default JobInput
