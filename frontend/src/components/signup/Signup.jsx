import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCarer = (props) => {
  const navigate = useNavigate();
  const [carer, setCarer] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    staffID: "GECL19",
  });

  const onChange = (e) => {
    setCarer({ ...carer, [e.target.name]: e.target.value });
  };

  const generateID = () => {
    const staffID = `${carer.firstName
      .slice(0, 2)
      .toUpperCase()}${carer.lastName.slice(0, 2).toUpperCase()}${Math.floor(
      Math.random() * 10
    )}${Math.floor(Math.random() * 10)}`;
    carer.staffID = staffID;
    setCarer({ ...carer });
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

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(carer.password) && !validateEmail(carer.email)) {
      alert("The email address and password entered are invalid.");
      //console.log("The email address and password entered are invalid.");
    } else if (!validatePassword(carer.password)) {
      alert(
        "Password needs to be at least 8 characters long, contain 1 number & special character."
      );
    } else if (!validateEmail(carer.email)) {
      alert("The email address entered is invalid");
    } else {
      console.log("got past the checks m8")
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
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="addcarer-form-wrap">
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
    </div>
  );
};

export default AddCarer;
