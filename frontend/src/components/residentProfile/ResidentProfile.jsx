import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ResidentProfile.css";
import { Circles } from "react-loader-spinner";

const ResidentProfile = () => {
  const { residentID } = useParams();
  const [user, setUser] = useState("");
  const [notes, setNotes] = useState(undefined);
  const [activity, setActivity] = useState("")
  const [resident, setResident] = useState({
    password: "",
    profilePic: "",
    residentID: residentID,
  });
  const [img, setImg] = useState("");
  const admin = JSON.parse(window.localStorage.getItem("user"));
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate()

  const tokenCheck = {
    headers: { Authorization: `Bearer ${token}` },
  };
  useEffect(() => {

    if (token) {
      axios.get(`http://localhost:8082/residents/${residentID}`, tokenCheck).then((res) => {
      setNotes(res.data.resident.notes);
      setUser(res.data.resident);
      });
    } else {
      navigate("/")
    } 
  }, []);

  const validatePassword = (input) => {
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const num = /\d/;
    if (input.length > 7 && specialChars.test(input) && num.test(input)) {
      return true;
    } else {
      return false;
    }
  };

  const onChange = (e) => {
    setResident({ ...resident, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!img) {
      if (resident.password !== "" && !validatePassword(resident.password)) {
        alert(
          "Password needs to be at least 8 characters long, contain 1 number & special character."
        );
      } else {
        setResident({
          password: "",
          profilePic: user.profilePic,
          resident: residentID,
        });
        axios
          .post("http://localhost:8082/residents/update", resident)
          .then((res) => {
            setResident({
              password: "",
              profilePic: "",
              resident: residentID,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else if (resident.password && img) {
      const data = new FormData();
      data.append("file", img);
      data.append("upload_preset", "carelink");
      data.append("cloud_name", "dhocnl7tm");
      axios
        .post("https://api.cloudinary.com/v1_1/dhocnl7tm/image/upload", data)
        .then((imgData) => {
          resident.profilePic = imgData.data.url.toString();
        })
        .then(() => {
          if (!validatePassword(resident.password)) {
            alert(
              "Password needs to be at least 8 characters long, contain 1 number & special character."
            );
          } else {
            axios
              .post("http://localhost:8082/residents/update", resident)
              .then((res) => {
                setResident({
                  password: "",
                  profilePic: "",
                  staffID: user.staffID,
                });
                const updatedUser = {
                  _id: user._id,
                  staffID: user.staffID,
                  email: user.email,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  profilePic: res.data.profilePic,
                };
                if (admin.admin === false) {
                  window.localStorage.setItem(
                    "user",
                    JSON.stringify(updatedUser)
                  );
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
    } else {
      const data = new FormData();
      data.append("file", img);
      data.append("upload_preset", "carelink");
      data.append("cloud_name", "dhocnl7tm");
      await axios
        .post("https://api.cloudinary.com/v1_1/dhocnl7tm/image/upload", data)
        .then((imgData) => {
          resident.profilePic = imgData.data.url.toString();
        })
        .then(() => {
          axios
            .post("http://localhost:8082/residents/update", resident)
            .then((res) => {
              // CHECK RESPONSE VALUE FOR UPDATED DATA ROUTE??? res.data.profilePic?
              setResident({
                password: "",
                profilePic: "",
                resident: resident.residentID,
              });
              const updatedUser = {
                _id: resident._id,
                residentID: residentID,
                firstName: resident.firstName,
                lastName: resident.lastName,
                profilePic: res.data.profilePic,
              };
              if (admin.admin === false) {
                window.localStorage.setItem(
                  "user",
                  JSON.stringify(updatedUser)
                );
              }
            })
            .catch((err) => {
              console.log(err);
            });
        });
    }
  };

  const renderNotes = () => {
    if (activity === "Activities" && notes) {
      return (
        <div
          className="col-md-4 notes-background"
          style={{ height: "500px", overflowY: "scroll" }}
        >
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-left">Activities</h4>
            </div>
            {notes.activities.map((item) => {
              return (
                <>
                  <div
                    className="d-flex justify-content-between align-items-center mb-3"
                    key={item._id}
                  >
                    <h6
                      className="text-left"
                      style={{ color: "grey", fontSize: "16px" }}
                    >
                      {`${item.by} @ ${item.time}`}
                    </h6>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="text-left">{item.note}</h6>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      );
    } else if (activity === "Medication" && notes) {
      return (
        <div
          className="col-md-4 notes-background"
          style={{ height: "500px", overflowY: "scroll" }}
        >
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-left">Medication</h4>
            </div>
            {notes.medication.map((item) => {
              return (
                <>
                  <div
                    className="d-flex justify-content-between align-items-center mb-3"
                    key={item._id}
                  >
                    <h6
                      className="text-left"
                      style={{ color: "grey", fontSize: "16px" }}
                    >
                      {`${item.by} @ ${item.time}`}
                    </h6>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="text-left">{item.note}</h6>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      );
    } else if (activity === "Wellbeing" && notes) {
      return (
        <div
          className="col-md-4 notes-background"
          style={{ height: "500px", overflowY: "scroll" }}
        >
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-left">Wellbeing</h4>
            </div>
            {notes.wellbeing.map((item) => {
              return (
                <>
                  <div
                    className="d-flex justify-content-between align-items-center mb-3"
                    key={item._id}
                  >
                    <h6
                      className="text-left"
                      style={{ color: "grey", fontSize: "16px" }}
                    >
                      {`${item.by} @ ${item.time}`}
                    </h6>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="text-left">{item.note}</h6>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      );
    } else if (activity === "Other" && notes) {
      return (
        <div
          className="col-md-4 notes-background"
          style={{ height: "500px", overflowY: "scroll" }}
        >
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-left">Other</h4>
            </div>
            {notes.other.map((item) => {
              return (
                <>
                  <div
                    className="d-flex justify-content-between align-items-center mb-3"
                    key={item._id}
                  >
                    <h6
                      className="text-left"
                      style={{ color: "grey", fontSize: "16px" }}
                    >
                      {`${item.by} @ ${item.time}`}
                    </h6>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="text-left">{item.note}</h6>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-left">Home Details</h4>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="text-left">Sevenoaks Residential Home</h5>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-left">
                118 Carehome Road, Sevenoaks, SO1 3LF
              </h6>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-left">Phone: 01834 494 2344</h6>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-left">Email: socarehome@email.com</h6>
            </div>
            <br />
            <br />
          </div>
        </div>
      );
    }
  };

  const changeCategory = (e) => {
    console.log(e.target.id);
    setActivity(e.target.id);
  };

  if (notes === undefined) {
    return (
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperClass="res-prof-spinner"
        visible={true}
      />
    );
  } else {
    return (
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded"
                width="150px"
                src={user.profilePic}
                alt="img"
              />
              <p />
              <h4 className="font-weight-bold">
                {user.firstName} {user.lastName}
              </h4>
              <h6 className="text-black-50">{user.residentID}</h6>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <form onSubmit={onSubmit}>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="form-control"
                      value={resident.password}
                      onChange={onChange}
                    />
                  </div>
                  <p />
                  <div className="col-md-12">
                    <label className="labels">Profile Picture</label>
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      id="chooseImg"
                      className="form-control"
                      onChange={(e) => setImg(e.target.files[0])}
                    />
                  </div>
                  <div className="mt-5 text-center">
                    <input
                      type="submit"
                      className="btn btn-primary profile-button"
                    />
                  </div>
                  <p />
                  <p />
                  <p />
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="text-left">Activity Details</h5>
                  </div>
                  <div className="col-md-12">
                    <ul className="nav nav-pills nav-justified">
                      <li className="nav-item nav-link-cl">
                        <a
                          className="nav-link"
                          id="Activities"
                          onClick={changeCategory}
                        >
                          Activities
                        </a>
                      </li>
                      <li className="nav-item nav-link-cl">
                        <a
                          className="nav-link"
                          id="Medication"
                          onClick={changeCategory}
                        >
                          Medication
                        </a>
                      </li>
                      <li className="nav-item nav-link-cl">
                        <a
                          className="nav-link"
                          id="Wellbeing"
                          onClick={changeCategory}
                        >
                          Wellbeing
                        </a>
                      </li>
                      <li className="nav-item nav-link-cl">
                        <a
                          className="nav-link"
                          id="Other"
                          onClick={changeCategory}
                        >
                          Other
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {renderNotes()}
        </div>
      </div>
    );
  }
};

export default ResidentProfile;
