/*eslint no-use-before-define: 2*/ 
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Resident from "../resident/resident";
import { Container, Row, Col, Button } from "reactstrap";
import Header from "../sass-css/Header";
import './CarerProfile.css'

const CarerProfile = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const [carer, setCarer] = useState({
    password: "",
    profilePic: "",
    staffID: user.staffID,
  });
  const [rerender, setRerender] = useState(false);
  const [tfa, setTfa] = useState("");

  const onChange = (e) => {
    setCarer({ ...carer, [e.target.name]: e.target.value });
  };

  const onChangeTfa = (e) => {
    setTfa(e.target.value);
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

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!img) {
      if (carer.password !== "" && !validatePassword(carer.password)) {
        alert(
          "Password needs to be at least 8 characters long, contain 1 number & special character."
        );
      } else {
        console.log("got past the checks m8");
        setCarer({
          password: "",
          profilePic: user.profilePic,
          staffID: user.staffID,
        });
        axios
          .post("http://localhost:8082/carers/update", carer)
          .then((res) => {
            console.log("RES ON 44", res);
            setCarer({
              password: "",
              profilePic: "",
              staffID: user.staffID,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else if (carer.password && img) {
      const data = new FormData();
      data.append("file", img);
      data.append("upload_preset", "carelink");
      data.append("cloud_name", "dhocnl7tm");
      axios
        .post("https://api.cloudinary.com/v1_1/dhocnl7tm/image/upload", data)
        .then((imgData) => {
          setCarer({
            password: password,
            profilePic: imgData.data.url.toString(),
            staffID: user.staffID,
          });
        })
        .then(() => {
          if (!validatePassword(carer.password)) {
            alert(
              "Password needs to be at least 8 characters long, contain 1 number & special character."
            );
          } else {
            console.log("got past the checks m8");
            axios
              .post("http://localhost:8082/carers/update", carer)
              .then((res) => {
                console.log(res);
                // CHECK RESPONSE VALUE FOR UPDATED DATA ROUTE??? res.data.profilePic?
                setCarer({
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
                window.localStorage.setItem(
                  "user",
                  JSON.stringify(updatedUser)
                );
                // setRerender(!false)
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
      axios
        .post("https://api.cloudinary.com/v1_1/dhocnl7tm/image/upload", data)
        .then((imgData) => {
          setCarer({
            password: password,
            profilePic: imgData.data.url.toString(),
            staffID: user.staffID,
          });
        })
        .then(() => {
          console.log("got past the checks m8");
          axios
            .post("http://localhost:8082/carers/update", carer)
            .then((res) => {
              console.log(res);
              // CHECK RESPONSE VALUE FOR UPDATED DATA ROUTE??? res.data.profilePic?
              setCarer({
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
              window.localStorage.setItem("user", JSON.stringify(updatedUser));
              // setRerender(!false)
            })
            .catch((err) => {
              console.log(err);
            });
        });
    }
  };

  return (
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded"
              width="150px"
              src={user.profilePic}
              alt="img"
            />
            <p />
            <h4 class="font-weight-bold">
              {user.firstName} {user.lastName}
            </h4>
            <h6 class="text-black-50">{user.email}</h6>
            <span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <form>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="form-control"
                    value={carer.password}
                    onChange={onChange}
                  />
                </div>
                <p />
                <div class="col-md-12">
                  <label class="labels">Profile Picture</label>
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    id="chooseImg"
                    className="form-control"
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                </div>
                <p />
                <div class="col-md-12">
                  <label class="labels">Placeholder</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    value=""
                  />
                </div>
                <p />
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h5 class="text-left">2FA</h5>
                </div>
                <div class="col-md-12">
                  <label class="labels">Mobile Number</label>
                  <h6 style={{color: "#AAAAAA"}}class="text-left">Please enter your mobile number starting 07</h6>
                  <input
                    type="number"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    class="form-control"
                    placeholder=""
                    value={tfa}
                    onChange={onChangeTfa}
                  />
                </div>
              </div>
              <div class="mt-5 text-center">
                <input
                  type="submit"
                  className="btn btn-primary profile-button"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Your Employer</h4>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5 class="text-right">Sevenoaks Residential Home</h5>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h6 class="text-left">118 Carehome Road, Sevenoaks, SO1 3LF</h6>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h6 class="text-left">Phone: 01834 494 2344</h6>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h6 class="text-left">Email: socarehome@email.com</h6>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

// useEffect(() => {
//           axios
//           .get(`http://localhost:8082/residents/`)
//           .then((res) => {
//               setResidents(res.data);
//           });
//       }, [])

//         const newResident = () =>{
//           navigate('/residents/add')
//         }

//   return (
//     <>
//     <Header/>
//     <main className="my-5 py-5">
//     <div  className='d-flex justify-content-center'>
//     <Button type='submit' onClick={newResident} color='warning'>Add Resident</Button>
//     </div>
//     <Container className="px-0 md-5">
//         <Row
//           className="pt-2 pt-md-5 w-100 px-4 px-xl-0"
//         >
//               {residents.map(
//                 (resident) =>
//                 <Col
//                 xs={{ order: 3 }}
//                 md={{ size: 6, order: 1 }}
//                 tag="aside"
//                 className="pb-5 mb-5 pb-md-0 mb-md-4 mx-auto mx-md-0">
//                 <Resident resident={resident} key={resident._id}/>
//                 </Col>
//               )}
//         </Row>
//       </Container>
//       </main>
//    </>

export default CarerProfile;