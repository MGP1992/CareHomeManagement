import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
    typeOfUser: "",
  });

  const navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  const emailOrID = () => {
    if (loginInfo.typeOfUser === "Family Member") {
      return "Resident ID";
    } else {
      return "Email";
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8082/tokens", loginInfo)
      .then((res) => {
        window.localStorage.setItem("user", JSON.stringify(res.data.user));
        window.localStorage.setItem("token", res.data.token);
      })
      .then((res) => {
        navigate("/carers/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="login-header">Login</h1>
      <form noValidate onSubmit={onSubmit}>
        <div className="login-form-entry">
          <div className="loginContainer">
            <div className="App">
              <h3>Who are you logging in as?</h3>

              <input
                type="radio"
                name="typeOfUser"
                value="Carer"
                id="carer"
                checked={loginInfo.typeOfUser === "Carer"}
                onChange={(e) => {
                  setloginInfo({ ...loginInfo, typeOfUser: e.target.value });
                }}
              />
              <label htmlFor="regular">Carer</label>
              <br />
              <input
                type="radio"
                name="typeOfUser"
                value="Family Member"
                id="family"
                checked={loginInfo.typeOfUser === "Family Member"}
                onChange={(e) => {
                  setloginInfo({ ...loginInfo, typeOfUser: e.target.value });
                }}
              />
              <label htmlFor="medium">Family Member</label>
              <br />
              <input
                type="radio"
                name="typeOfUser"
                value="Business"
                id="business"
                checked={loginInfo.typeOfUser === "Business"}
                onChange={(e) => {
                  setloginInfo({ ...loginInfo, typeOfUser: e.target.value });
                }}
              />
              <label htmlFor="large">Business</label>

              <p>
                You are logging in as a <strong>{loginInfo.typeOfUser}</strong>
              </p>
            </div>
          </div>
          <input
            type="text"
            placeholder={emailOrID()}
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
