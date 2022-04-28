import React from "react";
import { Link } from "react-router-dom";
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

function MoreProjects() {
  return (
    <div className="project-main">
        <ScrollToTop />
        <Header />

        <section className="my-work" id="work">
            <h2 className="section__title">More projects</h2>
            <p className="section__subtitle section__subtitle--work">My previous and future projects</p>
            <div className="portfolio">
                {/* Portfolio item 04 */}
                <Link to="/myportfolio" className="portfolio__item">
                    <img src="images/portfolio-04.jpg" alt="" className="portfolio__img" />
                </Link>
                
                {/* Portfolio item 02 */}
                <Link style={{backgroundColor: "transparent"}} to="/bookishbay" className="portfolio__item">
                    <img style={{visibility: "hidden"}} src="images/portfolio-02.jpg" alt="" className="portfolio__img" />
                </Link>
                
                {/* Portfolio item 03 */}
                <Link style={{backgroundColor: "transparent"}} to="/downloadtoprint" className="portfolio__item">
                    <img style={{visibility: "hidden"}} src="images/portfolio-03.jpg" alt="" className="portfolio__img" />
                </Link>
            </div>
        </section>   

        <Footer />
    </div>
    );
}

export default MoreProjects;