import React from "react";
import "../components/Services.css";
import online from "../assets/icon-online.svg";
import onboarding from "../assets/icon-onboarding.svg";
import budgeting from "../assets/icon-budgeting.svg";
import api from "../assets/icon-api.svg";

const Services = () => {
  return (
    <section className="services container">
      <div className="services__container">
        <div className="service--1">
          <img src={online} alt="online banking" className="service__icon" />
          <h3 className="heading__tertiary">Online Banking</h3>
          <p className="text">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="service--2">
          <img
            src={onboarding}
            alt="Simple Budgeting"
            className="service__icon"
          />
          <h3 className="heading__tertiary"> Simple Budgeting</h3>
          <p className="text">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="service--3">
          <img
            src={budgeting}
            alt="Fast Onboarding"
            className="service__icon"
          />
          <h3 className="heading__tertiary"> Fast Onboarding</h3>
          <p className="text">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="service--4">
          <img src={api} alt="Open API" className="service__icon" />
          <h3 className="heading__tertiary"> Open API</h3>
          <p className="text">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
