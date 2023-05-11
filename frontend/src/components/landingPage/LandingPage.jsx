import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const link = () => {
    navigate('/login')
  }


  return (
    <section className="landing">
      <h1 className="landing-header">CareLink</h1>
      <p className="landing-text">
        CareLink - Making sure that when you shit yourself, the family can see
      </p>

      <button className="btn" onClick={link}>
        Login
      </button>
    </section>
  );
};

export default LandingPage;
