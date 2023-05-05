import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddResident = (props) => {
  const navigate = useNavigate();
  const [resident, setResident] = useState({
    firstName: '',
    lastName: '',
    dOB: '',
    residentID: '',
    homeLivingAt: '',
  });

//   const generateId = () => {
//     const generate = `${resident.firstName.slice(0,1).toUpperCase()}${resident.lastName.slice(0,4).toUpperCase()}${Math.floor(Math.random()*1000)}`
//     setResident(...resident)
//   }

  const onChange = (e) => {
    setResident({ ...resident, [e.target.name]: e.target.value });
  };


  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8082/residents/add', resident)
      .then((res) => {
        console.log("res", res)
        setResident({
            firstName: '',
            lastName: '',
            dOB: '',
            residentID: '',
            homeLivingAt: ''
        });
        navigate('/');
      })
      .catch((err) => {
        console.log('Error adding a resident.');
      });
  };
  

  return (
    <div className='addresident-form-wrap'>
      <div className='addresident-container'>
        <h1 className='addresident-header'>Add a new Resident</h1>
        <form noValidate onSubmit={onSubmit}>
          <div className='addresident-form-entry'>
            <input
              type='text'
              placeholder='First Name'
              name='firstName'
              className='addresident-input'
              value={resident.firstName}
              onChange={onChange}
            />
          </div>
          <br />
          <div className='addresident-form-entry'>
            <input
              type='text'
              placeholder='Last Name'
              name='lastName'
              className='addresident-input'
              value={resident.lastName}
              onChange={onChange}
            />
          </div>
          <br />
          <div className='addresident-form-entry'>
          <input
              type='date'
              name='dOB'
              className='addresident-input'
              value={resident.dOB}
              onChange={onChange}
            />
          </div>
          <br />
          <div className='addresident-form-entry'>
            <input
              type='text'
              placeholder='Home living at'
              name='homeLivingAt'
              className='addresident-input'
              value={resident.homeLivingAt}
              onChange={onChange}
            />
          </div>
          <input
            type='submit'
            className='addresident-submit-btn'
          />
        </form>
      </div>
    </div>
  );
};

export default AddResident;