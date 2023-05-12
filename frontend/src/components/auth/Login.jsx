import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
    typeOfUser: "",
  });
  

  const handlePathChange = () => {
    navigate("/signup")
  }

  const emailOrID = () => {
    if (loginInfo.typeOfUser === "Family Member") {
      return "Resident ID";
    } else {
      return "Email";
    }
  };
  console.log(loginInfo.typeOfUser);
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
    <div className="signup-page">
      <div className="container signup-page">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-3">
                  Log In
                </h5>
                <div className="row mt-2">
                  <div className="form-check mb-3">
                    <div className="col-md-6">
                      <input
                        type="radio"
                        name="typeOfUser"
                        value="Carer"
                        id="carer"
                        className="form-check-input"
                        checked={loginInfo.typeOfUser === "Carer"}
                        onChange={(e) => {
                          setloginInfo({
                            ...loginInfo,
                            typeOfUser: e.target.value,
                          });
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberPasswordCheck"
                      >
                        Carer
                      </label>
                    </div>
                  </div>
                  <div className="form-check mb-3">
                    <div className="col-md-6">
                      <input
                        type="radio"
                        name="typeOfUser"
                        value="Family Member"
                        id="family"
                        className="form-check-input"
                        checked={loginInfo.typeOfUser === "Family Member"}
                        onChange={(e) => {
                          setloginInfo({
                            ...loginInfo,
                            typeOfUser: e.target.value,
                          });
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberPasswordCheck"
                      >
                        Family
                      </label>
                    </div>
                  </div>
                  <div className="form-check mb-3">
                    <div className="col-md-6">
                      <input
                        type="radio"
                        name="typeOfUser"
                        value="Business"
                        id="business"
                        className="form-check-input"
                        checked={loginInfo.typeOfUser === "Business"}
                        onChange={(e) => {
                          setloginInfo({
                            ...loginInfo,
                            typeOfUser: e.target.value,
                          });
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberPasswordCheck"
                      >
                        Business
                      </label>
                    </div>
                  </div>
                </div>
                <form onSubmit={onSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder={emailOrID()}
                      onChange={(e) => {
                        setloginInfo({ ...loginInfo, email: e.target.value });
                      }}
                    />
                    <label htmlFor="floatingInput">{emailOrID()}</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      onChange={(e) => {
                        setloginInfo({
                          ...loginInfo,
                          password: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Log In
                    </button>
                  </div>
                  <hr className="my-4" />
                </form>
                <div className="d-grid mb-2">
                  <button className="btn btn-login text-uppercase a-user" onClick={handlePathChange} >
                    Don't have an account?
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

export default Login;

{
  /* <div>
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
    </div> */
}
