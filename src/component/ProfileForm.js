import React from 'react'
import { useState } from 'react'

function ProfileForm({ submit }) {
    const [profiles, setProfiles] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
    })

    const handler = (event) => {
        setProfiles((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const handleForm = (e) => {
        e.preventDefault();
        submit(profiles)
    }



    return (
        <div className="formContainer">
            <h3>profile Form</h3>
            <form onSubmit={handleForm}>
                <fieldset>
                 
                    <legend>Bio data</legend>
                    <div className="names">
                        <label>first name</label>
                        <input name="firstname" value={profiles.firstname}
                            type="text" onChange={handler} />

                        <label>last name</label>
                        <input name="lastname" value={profiles.lastname}
                            type="text" onChange={handler} />

                    </div>

                    <div className="names">
                        <label>email</label>
                        <input name="email" value={profiles.email}
                            type="text" onChange={handler} />

                        <label>phone</label>
                        <input name="phone" value={profiles.phone}
                            type="text" onChange={handler} />

                    </div>
                </fieldset>
                <button className='form' type="submit">Add Profile</button>
            </form>

        </div>
    )
}

export default ProfileForm