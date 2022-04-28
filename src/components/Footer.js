import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Footer() {
  return (
    <footer className="footer">
        <a href="mailto:hello@jane.dev" className="footer__link">elmergomez@gmail.com</a>
        <ul className="social-list">
        <li className="social-list__item">
                <a className="social-list__link" href="https://codepen.io">
                    <i className="fab fa-codepen"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="http://linkedin.com">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://twitter.com">
                    <i className="fab fa-twitter"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://github.com">
                    <i className="fab fa-github"></i>
                </a> 
            </li>
        </ul>
        <div className="credits">
            Designed and built with <span className="credits__link--design"><Link to="/myportfolio">React</Link></span>. Deployed to <span className="credits__link--github"><a href="https://github.com/elgomz" target="_blank">Github</a></span>.
        </div>
    </footer>
    );
  }

  export default Footer;