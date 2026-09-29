import { useState } from 'react'

function EducationInput({setEducations, setEducationKeys, educationKeys, id}) {
    function save(e){
        e.preventDefault();
        let formData = new FormData(e.target); 
        
        let newEducation = {
            id: id,
            school: formData.get("school"),
            study: formData.get("study"),
            description: formData.get("description"),
            startDate: formData.get("startDate"),
            endDate: formData.get("endDate"),
        }

        setEducations((prevEducations => {
            let existingEducation = prevEducations.find((item)=>item.id===id);
            if (existingEducation){
                return prevEducations.map((item)=>item.id === id ? newEducation: item)
            }

            return [...prevEducations, newEducation]

        }));
    }
    function remove(){
        setEducations((prevEducations)=>{
            let removed = prevEducations.filter((item)=> item.id !== id);
            return [...removed];
        }) 
        //if only one education form, dont delete key
        if(educationKeys.length > 1){
            setEducationKeys((prevEducations)=>{
                let removed = prevEducations.filter((item)=> item !== id);
                return [...removed];
        }) 
        }
    }
    function addMore(){
        setEducationKeys([...educationKeys, crypto.randomUUID()])
    }

    return (

        <form onSubmit={save}>
            <div className="individual-form-wrapper">
                Place of study:
                <div><input name="school" placeholder="Place of study"></input></div>
                Area of study:
                <div><input name="study" placeholder="Area of study"></input></div>
                Study description:
                <div><input name="description" placeholder="Study description"></input></div>
                <div>Start Date: <input name="startDate" type="date" ></input></div>
                <div>End Date: <input name="endDate" type="date"></input></div>
                <div className="form-button-container">
                    <button type="submit">Save</button>
                    <button type="button" onClick={remove}>Delete</button>
                    <button>Edit</button>
    
                </div>
            </div>
        </form>
    )
}

export default EducationInput
