import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './LandingPage';
import Caroussel from "../reacstrap-stuff/Caroussel";
import Footer from "../reacstrap-stuff/Footer";
import Reviews from "./Reviews";
import './LandingPage.css'
import SideBar from '../sideBar/SideBar'



const LandingPage = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token")

  const logOut = () => {
    window.localStorage.clear()
  }
  return (
    <>
    {(token) ? //Nav bar when LOGGED IN
     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{zIndex: 1 }}>
     <div className="container" style={{ height: 65}}>
      <div className="sidebar-div" style={{width: 95 }}>
        <SideBar/>
      </div>
       <a className="navbar-brand" href=".">
         <img
           src="https://res.cloudinary.com/delftjfkr/image/upload/c_crop,h_306,r_0,w_310/v1684141905/CareLink_u8ka9p.png"
           alt="main-logo"
           style={{
             width: 80,
             height: 75,
             marginLeft: 60,
             marginRight: 20,
             padding: 0,
           }}
         />
         Linking care, residents, and family
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
           <li className="nav-item nav-link-cl" style={{fontWeight: 'bold'}}>
             <a className="nav-link" href=".">
               Home
             </a>
           </li>
           <li className="nav-item nav-link-cl">
             <a className="nav-link" href=".">
               About
             </a>
           </li>
           <li className="nav-item nav-link-cl">
             <a className="nav-link" href="/carers/profile">
              Profile
             </a>
           </li>
           <li className="nav-item nav-link-cl">
             <a className="nav-link" href="/residents">
               Residents
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
        <div className="container" style={{ height: 65 }}>
          <a className="navbar-brand" href=".">
            <img
              src="https://res.cloudinary.com/delftjfkr/image/upload/c_crop,h_306,r_0,w_310/v1684141905/CareLink_u8ka9p.png"
              alt="main-logo"
              style={{
                width: 80,
                height: 75,
                marginLeft: 60,
                marginRight: 20,
                padding: 0,
              }}
            />
            Linking care, residents, and family
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
          <div className="container" styles={{"backgroundColor" : "#f5f5f5"}}>
              <h1 className="fw-light">Welcome to CareLink </h1>
                <p className="lead">Stay connected with your loved ones </p>
                <p>Care, with CareLink</p>
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
