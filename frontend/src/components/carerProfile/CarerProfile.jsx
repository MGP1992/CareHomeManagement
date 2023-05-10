import React, {useEffect, useState} from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import Resident from '../resident/resident';


const CarerProfile = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const navigate = useNavigate();
  const [residents, setResidents] = useState([])

  useEffect(() => {
    axios
    .get(`http://localhost:8082/residents/`)
    .then((res) => {
        setResidents(res.data);
    });
  }, []);

  const newResident = () => {
    navigate("/residents/add");
  };

  return (
    <>
    <h1>Carer profile</h1>
    <h1>Staff ID -- {carer.staffID}</h1>
    <h1>Staff Name -- {`${carer.firstName} ${carer.lastName}`}</h1>
    <input type='submit' value='Add Resident' onClick={newResident}/>
    <div className='all-residents'>
      {residents.map(
        (resident) => <Resident resident={resident} key={resident._id}/>
      )}
    </div>
    <div>
    </div>
    </>
  );
};

export default CarerProfile;
