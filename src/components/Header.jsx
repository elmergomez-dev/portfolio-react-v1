import React from "react";
import { HashLink } from 'react-router-hash-link';

import "../index.css";

function openMenu() {
  document.body.classList.toggle("nav-open");
}

function closeMenu() {
  document.body.classList.remove("nav-open");
}

function Header() {
  return (
    <header className="header-nav">
        <div className="resume-button">
            <a href="/">Download My Resume</a>
        </div>
        <button className="nav-toggle" aria-label="toggle navigation" onClick={()=>{openMenu()}}>
            <span className="hamburger"></span>
        </button>

        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item"><HashLink to="/#home" className="navbar__link">Home</HashLink></li>
                <li className="navbar__item"><HashLink to="/#services" className="navbar__link">My Skills</HashLink></li>
                <li className="navbar__item"><HashLink to="/#about" className="navbar__link">About Me</HashLink></li>
                <li className="navbar__item"><HashLink to="/#work" className="navbar__link">My Portfolio</HashLink></li>
            </ul>
        </nav>        

        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><HashLink to="/#home" className="nav__link" onClick={()=>{closeMenu()}}>Home</HashLink></li>
                <li className="nav__item"><HashLink to="/#services" className="nav__link" onClick={()=>{closeMenu()}}>My Skills</HashLink></li>
                <li className="nav__item"><HashLink to="/#about" className="nav__link" onClick={()=>{closeMenu()}}>About Me</HashLink></li>
                <li className="nav__item"><HashLink to="/#work" className="nav__link" onClick={()=>{closeMenu()}}>My Portfolio</HashLink></li>
            </ul>
        </nav>        
    </header>
  );
}

export default Header;