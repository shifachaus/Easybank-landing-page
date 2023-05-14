import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import "./Header.css";
import { Link } from "react-scroll";

const Header = ({ show, setShow }) => {
  return (
    <>
      <header className="header ">
        <section className="nav__container container">
          <img src={logo} alt="logo" />

          <nav>
            {/* MOBILE NAVBAR */}
            <button type="button" className="menu__icon">
              {!show ? (
                <IoIosMenu
                  className="hamburger__icon open"
                  onClick={() => setShow(true)}
                />
              ) : (
                <RxCross1
                  className="hamburger__icon close"
                  onClick={() => setShow(false)}
                />
              )}
            </button>

            <div className={show ? "navbar__mobile show" : "navbar__mobile "}>
              <ul className="nav__list">
                <Link
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="nav__item--mobile"
                  onClick={() => setShow(false)}
                >
                  Home
                </Link>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="nav__item--mobile"
                  onClick={() => setShow(false)}
                >
                  About
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="nav__item--mobile"
                  onClick={() => setShow(false)}
                >
                  Contact
                </Link>
                <Link
                  activeClass="active"
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="nav__item--mobile"
                  onClick={() => setShow(false)}
                >
                  Blog
                </Link>
                <Link
                  activeClass="active"
                  to="careers"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="nav__item--mobile"
                  onClick={() => setShow(false)}
                >
                  Careers
                </Link>
              </ul>
            </div>

            {/* DESKTOP NAVBAR */}
            <div className="navbar___desk">
              <ul className="nav__list">
                <Link
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="nav__item"
                >
                  Home
                </Link>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="nav__item"
                >
                  About
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="nav__item"
                >
                  Contact
                </Link>
                <Link
                  activeClass="active"
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="nav__item"
                >
                  Blog
                </Link>
                <Link
                  activeClass="careers"
                  to="careers"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={500}
                  className="nav__item"
                >
                  Careers
                </Link>
              </ul>
            </div>
          </nav>

          <a href="#" className="nav__request__btn">
            Request Invite
          </a>
        </section>
      </header>
      {show && <div className="overlay"></div>}
    </>
  );
};

export default Header;
