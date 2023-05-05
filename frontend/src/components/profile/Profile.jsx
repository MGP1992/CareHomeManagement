import React from 'react'

const Profile = () => {
  const carer = JSON.parse(window.localStorage.getItem('carer'))

  return (
    <>
    <h1>Carer profile</h1>
    <h1>Staff ID -- {carer.staffID}</h1>
    <h1>Staff Name -- {`${carer.firstName} ${carer.lastName}`}</h1>
    </>
  )
}

export default Profile