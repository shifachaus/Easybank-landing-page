import React from "react";
import "./Hero.css";
import heroImageBG from "../assets/bg-intro-desktop.svg";
import heroImage from "../assets/image-mockups.png";

const Hero = ({ show }) => {
  return (
    <main id="hero">
      <div className="image__container"></div>
      {!show && <div className="image__container--mobile"></div>}
      <div className="hero__bg--image"></div>
      {/* <div className="hero__bg__desk--img"></div> */}
      <section className="hero__section container">
        <div className="hero__info">
          <h1 className="primary__heading"> Next generation digital banking</h1>
          <p className="text">
            {" "}
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <a href="#" className="request__btn ">
            Request Invite
          </a>
        </div>
      </section>
    </main>
  );
};

export default Hero;
