import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './AddResident.css'

const AddResident = (props) => {
  const navigate = useNavigate();
  const [resident, setResident] = useState({
    firstName: "",
    lastName: "",
    DOB: "",
    residentID: "",
    password: "",
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
          // residency: "",
        });
        navigate("/");
      })
      .catch((err) => {
        console.log("Error adding a resident.");
      });
  };

  return (
    <div className="add-resi">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h6 className="card-title text-center mb-5 fw-light fs-3">
                  Add a Resident
                </h6>
                <form onSubmit={onSubmit}>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <h6 className="text-center">First Name</h6>
                      <input
                        type="text"
                        placeholder="Jane"
                        name="firstName"
                        className="form-control text-center"
                        value={resident.firstName}
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <h6 className="text-center">Surname</h6>
                      <input
                        type="text"
                        placeholder="Doe"
                        name="lastName"
                        className="form-control text-center"
                        value={resident.lastName}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <p />
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      placeholder="DD/MM/YYY"
                      name="date"
                      className="form-control"
                      value={resident.dob}
                      onChange={onChange}
                    />
                    <label htmlFor="floatingInput">Date of Birth</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="form-control"
                      value={resident.password}
                      onChange={onChange}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddResident;
