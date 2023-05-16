import React from "react";
import { useState, useParams } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
    typeOfUser: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handlePathChange = () => {
    navigate("/signup");
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
      .then(() => {
        const user = JSON.parse(window.localStorage.getItem("user"));
        if (user.residentID) {
          navigate(`/residents/profile/${user.residentID}`);
        } else {
          navigate('/residents')
        }
      })
      .catch((err) => {
        setErrorMsg(err.response.data.message);
        console.log(err.response.data.message);
      });
  };

  return (
    <div className="signup-page">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                  <a href="/">
                    <img 
                    className="pic-logo"
                    src="https://res.cloudinary.com/delftjfkr/image/upload/c_crop,h_306,r_0,w_310/v1684141905/CareLink_u8ka9p.png"
                    alt="main-logo"
                    style={{marginLeft: "30%", marginRight: "30%", width: "40%", height: 165 }}
                    /></a>
                <h5 className="card-title text-center mb-4 mt-2 fw-light fs-3">
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
                  {errorMsg !== "" ? (
                    <p style={{ color: "red" }}>{errorMsg}</p>
                  ) : (
                    false
                  )}
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
                  <button
                    className="btn btn-login text-uppercase a-user"
                    onClick={handlePathChange}
                  >
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