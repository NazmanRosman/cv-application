import { useState } from 'react'

function PersonalInput({setPersonal}) {

    function save(e){
        e.preventDefault();

        let formData = new FormData(e.target);
        setPersonal({
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
        })
    }
    
    return (
        <form onSubmit={save}>
    
            <div className="individual-form-wrapper">
                Name:
                <div><input name="name" placeholder= "Name"></input></div>
                Email:
                <div><input name="email" placeholder="E-mail"></input></div>
                Phone:
                <div><input name="phone" placeholder="Phone"></input></div>
                <div className="form-button-container">
                    <button type="submit">Save</button>
                    <button>Edit</button>
                </div>
            </div>
        </form>

  
  )
}

export default PersonalInput
