import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ResidentProfile from '../residentProfile/ResidentProfile'
import axios from 'axios';

const CarerProfile = () => {
  const carer = JSON.parse(window.localStorage.getItem('carer'))
  const navigate = useNavigate();
  const [residents, setResidents] = useState([])
  
  useEffect(() => {
    axios
    .get(`http://localhost:8082/residents/`)
    .then((res) => {
        setResidents(res.data);
        // setNotes(res.data.notes)
    });
}, [])

const newResident = () =>{
  navigate('/residents/add')
}

  return (
    <>
    <h1>Carer profile</h1>
    <h1>Staff ID -- {carer.staffID}</h1>
    <h1>Staff Name -- {`${carer.firstName} ${carer.lastName}`}</h1>
    <input type='submit' value='Add Resident' onClick={newResident}/>
    <div>
    </div>
    </>
  )
}

export default CarerProfile