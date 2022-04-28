import React from "react";
import { HashLink } from "react-router-hash-link";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import "../index.css";

function openMenu() {
    document.body.classList.toggle("nav-open");
}

function closeMenu() {
    document.body.classList.remove("nav-open");
}

function MyPortfolio() {
  return (
    
        <div className="project-main">
            <ScrollToTop />
            <Header />

            {/* My Portfolio intro */}
            <section className="project">
                <h1>
                    <div className="project__title">elmergomez.dev</div>
                    <div className="project__sub-title">My Developer Portfolio</div>
                </h1>
                <p className="project__sub-title--strip">React / JSX / CSS3</p>
                <img src={process.env.PUBLIC_URL + "/images/portfolio-04.jpg"} alt="" className="intro__img" />
            </section>

            {/* Project details */}
            <section className="project-details" id="about">

                <div className="toc">
                    <div className="toc__header">Table of Contents</div>
                    <div className="toc__list">
                        <ul className="toc__list--ul">
                            <li className="toc__item"><a className="toc__link" href="#purpose">Project Purpose and Goals</a></li>
                            <li className="toc__item"><a className="toc__link" href="#features">Features and Functionalities</a></li>
                            <li className="toc__item"><a className="toc__link" href="#tools">Tools Used and Explanation</a></li>
                        </ul>
                    </div>
                    <div className="goto-link">
                        <div className="goto-link__header">Go to Website</div>
                        <div className="goto-link__list">
                            <i className="fas fa-external-link"></i>&nbsp;&nbsp;
                            <HashLink className="goto-link__link" to="/#home">
                                https://elmergomez.dev
                            </HashLink>
                        </div>
                    </div>
                </div>
                
                <div className="proj-details">
                    <div className="proj-details__header" id="purpose">Project Purpose &amp; Goals</div>
                    <div className="proj-details__text">
                        <p>I created this online portfolio to tell you a little something about me, such as my work
                            experience, my skill set, and my favorite hobby.
                        </p>
                        <p>Through this portfolio, I aim to demonstrate what I can do as a front-end web developer, 
                            given the technologies I currently use, and those that I used in the past.
                        </p>
                    </div>
                    <div className="proj-details__header" id="features">Features &amp; Functionalities</div>
                    <div className="proj-details__text">
                        <p>A brief explanation, together with screenshots, are provided for each project. When applicable, 
                            the source code is made available on GitHub.
                        </p>
                        <p>You can download my resume from the link above. My email is provided in the footer together with
                            my LinkedIn, Twitter, CodePen and GitHub accounts.
                        </p>
                    </div>
                    <div className="proj-details__header" id="tools">Tools Used &amp; Explanation</div>
                    <div className="proj-details__text">
                        <p>This portfolio was coded using React with Router to make it a single-page application (SPA). The 
                            React Router makes "snappy" transitions between sections in the website without the need to reload
                            the page.
                        </p>
                        <p>The site was designed using pure CSS; no libraries were used. Aside from JSX from React, embedded
                            Javascript code was embedded to enable the hamburger menu on mobile display.
                        </p>
                    </div>
                </div>
                
            </section>        

            <Footer />
     
        </div>
    
    );
}

export default MyPortfolio;