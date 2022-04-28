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

function Bookishbay() {
  return (
    <div className="project-main">
        <ScrollToTop />
        <Header />

        {/* Bookishbay intro */}
        <section className="project">
            <h1>
                <div className="project__title">BookishBay.com</div>
                <div className="project__sub-title">Literary Book Blog</div>
            </h1>
            <p className="project__sub-title--strip">WordPress / Bootstrap / jQuery</p>
            <img src="../images/portfolio-02.jpg" alt="" className="intro__img" />
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
                        <a className="goto-link__link" href="https://bookishbay.com" target="_blank">
                            https://bookishbay.com
                        </a>
                    </div>
                </div>
            </div>

            <div className="proj-details">
                <div className="proj-details__header" id="purpose">Project Purpose &amp; Goals</div>
                <div className="proj-details__text">
                    <p>As a lifelong reader, I decided to create a blog where I could feature books that I own and write 
                        brief reviews about them. With skills in e-commerce and design, I also thought of designing 
                        products that cater to the literary book reader niche, so I can sell them to my blog readers.
                    </p>
                    <p>This blog site aims to build a community of readers, of the literary fiction genre in particular.
                    </p>
                    <img className="project__image" src="images/bookishbay-feature-01.jpg" />
                </div>
                <div className="proj-details__header" id="features">Features &amp; Functionalities</div>
                <div className="proj-details__text">
                    <p>Since this is a blog site, it is heavily focused on my writings. The posts are about the books 
                        I've read, my thoughts on literary compilations, and other topics that I came across during 
                        the course of my reading.
                    </p>
                    <p>The online store employs the print-on-demand business model.  When a customer places an order, 
                        the specific design that the customer chose is sent to the printer automatically, then the 
                        printer ships the finished merchandise directly to the customer.
                    </p>
                    <img className="project__image" src="images/bookishbay-feature-02.jpg" />
                </div>
                <div className="proj-details__header" id="tools">Tools Used &amp; Explanation</div>
                <div className="proj-details__text">
                    <p>This website was built in WordPress and uses the WooCommerce plugin for its print-on-demand 
                        store. 
                        <img className="project__image" src="images/bookishbay-feature-03.jpg" />
                    </p>
                    <p>A few enhancements were made to the free theme, such as the creation of login page 
                        and password recovery, putting up a subscription box for the newsletter, enhancement of the 
                        search feature using taxonomies, and data cloud.

                    </p>
                </div>
            </div>
        </section>  

        <Footer />     

    </div>
    );
}

export default Bookishbay;