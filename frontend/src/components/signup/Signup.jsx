import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import "./Signup.css";

const AddCarer = (props) => {
  const navigate = useNavigate()
  const [carer, setCarer] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    staffID: "",
  });

  const handlePathChange = () => {
    navigate("/login")
  }

  const onChange = (e) => {
    setCarer({ ...carer, [e.target.name]: e.target.value });
  };

  const generateID = () => {
    const staffID = `${carer.firstName
      .slice(0, 2)
      .toUpperCase()}${carer.lastName.slice(0, 2).toUpperCase()}${
      Math.floor(Math.random() * 89) + 10
    }`;
    carer.staffID = staffID;
  };

  const validatePassword = (input) => {
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const num = /\d/;
    if (input.length > 7 && specialChars.test(input) && num.test(input)) {
      return true;
    } else {
      return false;
    }
  };

  const validateEmail = (input) => {
    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validEmail)) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(carer.password) && !validateEmail(carer.email)) {
      alert("The email address and password entered are invalid.");
    } else if (!validatePassword(carer.password)) {
      alert(
        "Password needs to be at least 8 characters long, contain 1 number & special character."
      );
    } else if (!validateEmail(carer.email)) {
      alert("The email address entered is invalid");
    } else {
      console.log("got past the checks m8");
      generateID();
      axios
        .post("http://localhost:8082/carers/add", carer)
        .then((res) => {
          setCarer({
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            staffID: "",
          });
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="signup-page">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h6 className="card-title text-center mb-5 fw-light fs-3">
                  Sign Up
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
                        value={carer.firstName}
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
                        value={carer.lastName}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <p />
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={carer.email}
                      onChange={onChange}
                    />
                    <label htmlFor="floatingInput">Email Address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="form-control"
                      value={carer.password}
                      onChange={onChange}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                  <hr className="my-4" />
                </form>
                <div className="d-grid mb-2">
                  <button className="btn btn-login text-uppercase a-user" onClick={handlePathChange}>
                    Already a user?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCarer;

{
  /* <div className="addcarer-form-wrap">
<div className="addcarer-container">
  <h1 className="addcarer-header">Add a new Carer</h1>
  <form noValidate onSubmit={onSubmit}>
    <div className="addcarer-form-entry">
      <input
        type="text"
        placeholder="Email"
        name="email"
        className="addcarer-input"
        value={carer.email}
        onChange={onChange}
      />
    </div>
    <br />
    <div className="addcarer-form-entry">
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="addcarer-input"
        value={carer.password}
        onChange={onChange}
      />
    </div>
    <br />
    <div className="addcarer-form-entry">
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        className="addcarer-input"
        value={carer.firstName}
        onChange={onChange}
      />
    </div>
    <br />
    <div className="addcarer-form-entry">
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        className="addcarer-input"
        value={carer.lastName}
        onChange={onChange}
      />
    </div>
    <br />
    <input type="submit" className="addcarer-submit-btn" />
  </form>
</div>
</div> */
}
