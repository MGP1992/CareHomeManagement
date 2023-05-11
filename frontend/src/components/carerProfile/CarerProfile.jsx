import React, {useEffect, useState} from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import Resident from '../resident/resident';
import { 
  Container, Row, Col, Button,
} from 'reactstrap';
import Header from '../sass-css/Header';

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

  const onChange = (e) => {
    setCarer({ ...carer, [e.target.name]: e.target.value });
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
    <>
      <h1>Carer profile</h1>
      <h1>Staff ID -- {user.staffID}</h1>
      <img
        src={user.profilePic}
        style={{ maxWidth: "264px" }}
        alt="Not rendering profile pic"
      ></img>
      <h1>Staff Name -- {`${user.firstName} ${user.lastName}`}</h1>
      <form noValidate onSubmit={onSubmit}>
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
        <input
          type="file"
          accept="image/png, image/jpeg"
          id="chooseImg"
          onChange={(e) => setImg(e.target.files[0])}
        ></input>
        <br />
        <input type="submit" className="addcarer-submit-btn" />
      </form>
//         useEffect(() => {
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
    </>
  );
};

export default CarerProfile;
