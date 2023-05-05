import React from "react";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    // going forward perform the check for resident or carer here maybe?
    //could add a box to check if signing in as carer
    axios
      .post("http://localhost:8082/carers/auth", loginInfo)
      .then((res) => {
        window.localStorage.setItem("carer", JSON.stringify(res.data.user));
        // window.localStorage.setItem("staffID", res.data.user.staffID);
        // window.localStorage.setItem("firstName", res.data.user.firstName);
        // window.localStorage.setItem("lastName", res.data.user.lastName);
      })
      .then((res) => {
        navigate("/profile");
      })
      .catch((err) => {
        console.log("Could not log in");
      });
  };

  return (
    <div className="loginContainer">
      <h1 className="login-header">Login</h1>
      <form noValidate onSubmit={onSubmit}>
        <div className="login-form-entry">
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="addcarer-input"
            onChange={(e) => {
              setloginInfo({ ...loginInfo, email: e.target.value });
            }}
          />
        </div>
        <br />
        <div className="addcarer-form-entry">
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="addcarer-input"
            onChange={(e) => {
              setloginInfo({ ...loginInfo, password: e.target.value });
            }}
          />
        </div>
        <br />
        <input type="submit" value="Login" className="addcarer-submit-btn" />
      </form>
    </div>
  );
};

export default Login;
