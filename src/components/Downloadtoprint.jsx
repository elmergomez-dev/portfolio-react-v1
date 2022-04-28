import React from "react";
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

function Downloadtoprint() {
  return (
    <div className="project-main">
        <ScrollToTop />
        <Header />

        {/* Downloadtoprint intro */}
        <section className="project">
            <h1>
                <div className="project__title">DownloadToPrint.com</div>
                <div className="project__sub-title">Digital Download Site</div>
            </h1>
            <p className="project__sub-title--strip">WordPress / Bootstrap / jQuery</p>
            <img src={process.env.PUBLIC_URL + "/images/portfolio-03.jpg"} alt="" className="intro__img" />
        </section>

        {/* Project details */}
        <section className="project-details">

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
                        <a className="goto-link__link" href="https://downloadtoprint.com" target="_blank">
                            https://downloadtoprint.com
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="proj-details">
                <div className="proj-details__header" id="purpose">Project Purpose &amp; Goals</div>
                <div className="proj-details__text">
                    <p>This is an e-commerce site that offers digital downloads. Instead of physical products, 
                        customers are able to purchase digital files which they can instantly download and print upon payment.
                    </p>
                    <p>With skills in design, I create journals, planners, and trackers in digital files. This website 
                        aims to generate passive income because the files can be sold indefinitely without maintaining 
                        physical inventory.
                    </p>
                    <img className="project__image" src={process.env.PUBLIC_URL + "/images/downloadtoprint-feature-01.jpg"} />
                </div>
                <div className="proj-details__header" id="features">Features &amp; Functionalities</div>
                <div className="proj-details__text">
                    <p>Upon payment, the file becomes available as an instant download. An email containing the download link
                        is sent to the customer. The download links for all purchases can also be accessed from the customer's
                        dashboard.
                    </p>
                    <p>The customer needs to register with the same email address used when they purchased the file so that the download link
                        can be made available in the customer's dashboard together with their purchase history.
                    </p>
                    <img className="project__image" src={process.env.PUBLIC_URL + "/images/downloadtoprint-feature-02.jpg"} />
                </div>
                <div className="proj-details__header" id="tools">Tools Used &amp; Explanation</div>
                <div className="proj-details__text">
                    <p>This website was built in WordPress. It uses Easy Digital Downloads plugin to manage the online store.</p>
                </div>
            </div>
            
        </section>        

        <Footer />       

    </div>
    );
}

export default Downloadtoprint;