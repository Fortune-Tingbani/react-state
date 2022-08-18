import React from 'react'
import ProfileForm from './component/ProfileForm'
import ProfileCards from './component/ProfileCards'
import { useState } from 'react'

function App() {
  const [allProfiles, setAllprofiles] = useState([

    {
      firstname:"Fortunate",
      lastnmae:"Tingbani",
      email:"fortunetingbani@gmail.com",
      phone:"0249961983"
    }
  ])

  const updateallprofiles = (profile) => {
    let arr = allProfiles;
    arr.push(profile)
    setAllprofiles([...arr])
  };



  return (
    <>
    <div className="app">
    <h1>Our Profile maker</h1>
    </div>
    <ProfileForm submit={updateallprofiles} />
    <hr />
    <div className="list">
    {allProfiles.map( (person, index) => (
      <ProfileCards key={index} card={person} />
      ))}
    
    </div>
    </>
  )
}

export default App