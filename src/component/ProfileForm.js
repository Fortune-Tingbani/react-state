import React from 'react'
import { useState } from 'react'

function ProfileForm() {
    const [profiles, setProfiles] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:""
    })

    const handler = (event) => {
        setProfiles((prev) => ({
            ...prev,
            [event.target.name]:event.target.value 
        }))
    }

    const handleForm = (e) => {
        e.preventDefault();
        Submit(profile)
    }



  return (
    <div className="formContainer">
    <h3>profile Form</h3>
    <form>
    <fieldset>
    <legend>Bio data</legend>
    <div className="names">
    <label>first name</label>
    <input name="firstname" value={profile.firstname} 
    type="text" onChange={handler}/>
   
    <label>last name</label>
    <input name="lastname" value={profile.firstname} 
    type="text" onChange={handler}/>
    
    </div>
    <legend>Bio data</legend>
    <div className="names">
    <label>first name</label>
    <input name="firstname" value={profile.firstname} 
    type="text" onChange={handler}/>
   
    <label>last name</label>
    <input name="lastname" value={profile.firstname} 
    type="text" onChange={handler}/>
    
    </div>

    <div className="names">
    <label>email</label>
    <input name="email" value={profile.firstname} 
    type="text" onChange={handler}/>
   
    <label>phone</label>
    <input name="phone" value={profile.firstname} 
    type="text" onChange={handler}/>
    
    </div>
    </fieldset>
    </form>
    
    </div>
  )
}

export default ProfileForm