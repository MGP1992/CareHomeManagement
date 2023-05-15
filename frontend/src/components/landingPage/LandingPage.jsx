import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../reacstrap-stuff/Header'
import './LandingPage';
import Caroussel from "../reacstrap-stuff/Caroussel";
import Footer from "../reacstrap-stuff/Footer";
import Reviews from "./Reviews";




const LandingPage = () => {
  const navigate = useNavigate();

  const link = () => {
    navigate('/login')
  }

  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container" style={{height: 65}}>
    <a className="navbar-brand" href="."><img src='https://res.cloudinary.com/delftjfkr/image/upload/c_crop,h_306,r_0,w_310/v1684141905/CareLink_u8ka9p.png' alt="main-logo" style={{width: 80, height: 75, marginLeft: 60, marginRight: 20, padding: 0}}/>The home for homes</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <a className="nav-link" href=".">Main</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={link}>Log In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=".">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=".">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=".">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div>
<Caroussel/>
</div>
<section>

</section>

<section className="py-5">
  <div className="container">
    <h1 className="fw-light">Welcome to CareLink </h1>
    <p className="lead">We provide the best tools to help your staff and residents. Delivering the best solutions for any problem you may counter</p>
  </div>
    <Reviews/>
  </section>
  <footer>
  <Footer/>
  </footer>
    </>
  );
};

export default LandingPage;
