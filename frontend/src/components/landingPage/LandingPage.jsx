import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './LandingPage';
import Caroussel from "../reacstrap-stuff/Caroussel";
import Footer from "../reacstrap-stuff/Footer";
import Reviews from "./Reviews";
import './LandingPage.css'
import SideBarLP from "../sideBar/SideBar-LP";



const LandingPage = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token")
  const user = JSON.parse(window.localStorage.getItem("user"))

  const logOut = () => {
    window.localStorage.clear()
  }

  console.log(user)

  return (
    <>
    {(token) ? //Nav bar when LOGGED IN
     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <SideBarLP/>
        <img
              className="navbar-pic"
              src="https://res.cloudinary.com/delftjfkr/image/upload/c_crop,h_306,r_0,w_310/v1684141905/CareLink_u8ka9p.png"
              alt="main-logo"
              style={{
                width: 70,
                height: 70,
                marginRight: 20,
                marginLeft: 30,
                padding: 0,
              }}
            />
        <h5 className="user-name">Hello {user.firstName}</h5>
     <div className="container" style={{ height: 65, width: "40%", marginLeft: "30%", marginRight: "0%"}}>
       <a className="navbar-brand" href=".">
       </a>
       <button
         className="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarResponsive"
         aria-controls="navbarResponsive"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarResponsive">
         <ul className="navbar-nav ms-auto">
           <li className="nav-item nav-link-cl">
             <a className="nav-link" href=".">
               Home
             </a>
           </li>
           <li className="nav-item nav-link-cl">
             <a className="nav-link" href=".">
               About
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/" onClick={logOut}>
               <button type="button" className="logout-btn">
                 Log Out
               </button>
             </a>
           </li>
         </ul>
       </div>
     </div>
   </nav>
     :  //Nav bar when LOGGED OUT    
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <></>
                  <img
              className="navbar-pic"
              src="https://res.cloudinary.com/delftjfkr/image/upload/c_crop,h_306,r_0,w_310/v1684141905/CareLink_u8ka9p.png"
              alt="main-logo"
              style={{
                width: 70,
                height: 70,
                marginRight: 20,
                marginLeft: 150,
                padding: 0,
              }}
            />
            <a className="navbar-brand" href=".">
            Linking care, residents, and family
          </a>
        <div className="container"style={{ height: 65, width: "35%", marginLeft: "30%", marginRight: "0%"}}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item nav-link-cl">
                <a className="nav-link" href=".">
                  Main
                </a>
              </li>
              <li className="nav-item nav-link-cl">
                <a className="nav-link" href=".">
                  About
                </a>
              </li>
              <li className="nav-item nav-link-cl">
                <a className="nav-link" href=".">
                  Features
                </a>
              </li>
              <li className="nav-item nav-link-cl">
                <a className="nav-link" href=".">
                  Enquire
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  <button type="button" className="signup-btn">
                    Sign Up
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  <button type="button" className="login-btn">
                    Log In
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
}
    <div>
      <Caroussel/>
    </div>
    <section className="py-5" >
          <div className="slogan-container" styles={{"backgroundColor" : "#f5f5f5"}}>
              <h3 className="slogan-title fw-light"> <img className="slogan-pic" src="https://res.cloudinary.com/delftjfkr/image/upload/v1684329567/grandmother_1_enqr8f.png" alt="main-logo"/></h3>
                <p className="slogan-body lead">Stay connected with your loved ones </p>
                <p className="slogan-p">Care, with CareLink</p>
          </div>
          <div>
            <Reviews/>
          </div>
    </section>
    <footer>
      <Footer/>
    </footer>
    </>
  );
};

export default LandingPage;