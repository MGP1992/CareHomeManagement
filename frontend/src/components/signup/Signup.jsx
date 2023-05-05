import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCarer = (props) => {
  const navigate = useNavigate();
  const [carer, setCarer] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    staffID: '' 
  });

  const onChange = (e) => {
    setCarer({ ...carer, [e.target.name]: e.target.value });
  };

  const generateID = () => {
    const staffID = `${carer.firstName.slice(0, 2).toUpperCase()}${carer.lastName.slice(0, 2).toUpperCase()}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`
    carer.staffID = staffID
    setCarer({...carer})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    generateID()
    axios
      .post('http://localhost:8082/carers/add', carer)
      .then((res) => {
        console.log("res", res)
        setCarer({
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          staffID: ''
        });
      })
      .catch((err) => {
        console.log('Error adding a carer.');
      });
  };

  return (
    <div className='addcarer-form-wrap'>
      <div className='addcarer-container'>
        <h1 className='addcarer-header'>Add a new Carer</h1>
        <form noValidate onSubmit={onSubmit}>
          <div className='addcarer-form-entry'>
            <input
              type='text'
              placeholder='Email'
              name='email'
              className='addcarer-input'
              value={carer.email}
              onChange={onChange}
            />
          </div>
          <br />
          <div className='addcarer-form-entry'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              className='addcarer-input'
              value={carer.password}
              onChange={onChange}
            />
          </div>
          <br />
          <div className='addcarer-form-entry'>
            <input
              type='text'
              placeholder='First Name'
              name='firstName'
              className='addcarer-input'
              value={carer.firstName}
              onChange={onChange}
            />
          </div>
          <br />
          <div className='addcarer-form-entry'>
            <input
              type='text'
              placeholder='Last Name'
              name='lastName'
              className='addcarer-input'
              value={carer.lastName}
              onChange={onChange}
            />
          </div>
          <br />
          <input
            type='submit'
            className='addcarer-submit-btn'
          />
        </form>
      </div>
    </div>
  );
};

export default AddCarer;