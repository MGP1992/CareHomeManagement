import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddResident = (props) => {
  const navigate = useNavigate();
  const [resident, setResident] = useState({
    firstName: "",
    lastName: "",
    DOB: "",
    residentID: "",
    password: "",
    admin: JSON.parse(window.localStorage.getItem("user")).admin
    // residency: "",
  });

  const generateID = () => {
    const residentID = `${resident.firstName
      .slice(0, 2)
      .toUpperCase()}${resident.lastName.slice(0, 2).toUpperCase()}${
      Math.floor(Math.random() * 89) + 10
    }`;
    resident.residentID = residentID;
    setResident({ ...resident });
  };

  const onChange = (e) => {
    setResident({ ...resident, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    generateID();
    axios
      .post("http://localhost:8082/residents/add", resident)
      .then((res) => {
        console.log("res", res);
        setResident({
          firstName: "",
          lastName: "",
          DOB: "",
          residentID: "",
          password: "",
          admin: JSON.parse(window.localStorage.getItem("user")).admin
          // residency: "",
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="addresident-form-wrap">
      <div className="addresident-container">
        <h1 className="addresident-header">Add a new Resident</h1>
        <form noValidate onSubmit={onSubmit}>
          <div className="addresident-form-entry">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="addresident-input"
              value={resident.firstName}
              onChange={onChange}
            />
          </div>
          <br />
          <div className="addresident-form-entry">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="addresident-input"
              value={resident.lastName}
              onChange={onChange}
            />
          </div>
          <br />
          <div className="addresident-form-entry">
            <input
              type="date"
              name="DOB"
              className="addresident-input"
              value={resident.DOB}
              onChange={onChange}
            />
          </div>
          <br />
          <div className="addresident-form-entry">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="addresident-input"
              value={resident.password}
              onChange={onChange}
            />
          </div>
          <br />
          <input type="submit" className="addresident-submit-btn" />
        </form>
      </div>
    </div>
  );
};

export default AddResident;
