import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import external from "../../images/external.webp";

/*
import fb from "../../images/socials/facebook.webp";
import insta from "../../images/socials/instagram.webp";
import twitter from "../../images/socials/twitter.webp";
import eventbrite from "../../images/socials/eventbrite.webp";
*/
import "./NavStyle.css";

export default function Nav() {
  const [burgerClass, setBurgerClass] = useState("burger-bar closed");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [menuOpen, setMenuOpen] = useState(false);

  // toggle burger menu change
  function updateMenu() {
    if (!menuOpen) {
      setBurgerClass("burger-bar open");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar closed");
      setMenuClass("menu hidden");
    }
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="header">
      <div className="name">Sasha Rosser</div>
      <div
        className="burger"
        onClick={() => {
          updateMenu();
        }}
      >
        <div className={burgerClass} />
        <div className={burgerClass} />
        <div className={burgerClass} />
      </div>
      <nav className={menuClass}>
        <NavLink
          to="/"
          onClick={() => {
            updateMenu();
          }}
          className="nav-link"
        >
          HOME
        </NavLink>
        <NavLink
          to="/publications"
          onClick={() => {
            updateMenu();
          }}
          className="nav-link"
        >
          PUBLICATIONS
        </NavLink>
        <NavLink
          to="/experience"
          onClick={() => {
            updateMenu();
          }}
          className="nav-link"
        >
          EXPERIENCE
        </NavLink>
        <NavLink
          to="/creative"
          onClick={() => {
            updateMenu();
          }}
          className="nav-link"
        >
          CREATIVE
        </NavLink>
        <NavLink
          to="/standup"
          onClick={() => {
            updateMenu();
          }}
          className="nav-link"
        >
          STAND-UP
        </NavLink>
        <NavLink
          to="/shows"
          onClick={() => {
            updateMenu();
          }}
          className="nav-link"
        >
          SHOWS
        </NavLink>
      </nav>
    </header>
  );
}
