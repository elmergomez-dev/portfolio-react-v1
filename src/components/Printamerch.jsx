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

function Printamerch() {
  return (
    
        <div className="project-main">
            <ScrollToTop />
            <Header />

            {/* Printamerch intro */}
            <section className="project">
                <h1>
                    <div className="project__title">PrintaMerch.com</div>
                    <div className="project__sub-title">E-Commerce Site</div>
                </h1>
                <p className="project__sub-title--strip">Liquid / Bootstrap / jQuery</p>
                <img src="../images/portfolio-01.jpg" alt="" className="intro__img" />
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
                            <a className="goto-link__link" href="https://printamerch.com" target="_blank">
                                https://printamerch.com
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="proj-details">
                    <div className="proj-details__header" id="purpose">Project Purpose &amp; Goals</div>
                    <div className="proj-details__text">
                        <p>This e-commerce shop is my first personal project. It was built when I started my venture 
                            in the dropshipping business. It was later developed into a print-on-demand store, and I 
                            started designing my own products.
                        </p>
                        <p>This store caters to the content creator niche. It has ready-made designs that would be 
                            printed on the merchandise automatically when a customer places an order. Customers can 
                            also send in their own designs to be printed on the product they choose.
                        </p>
                        <img className="project__image" src="images/printamerch-feature-01.jpg" />
                    </div>
                    <div className="proj-details__header" id="features">Features &amp; Functionalities</div>
                    <div className="proj-details__text">
                        <p>The store has a DIY design customizer. When a customer uploads a design, it can still be 
                            adjusted accordingly, such as changing orientation and size, adding text, and setting 
                            placement of the design in the actual product. There is also an image gallery that 
                            customers can use if they are designing from scratch.
                        </p>
                        <p>Once the customer finishes designing, a mockup is generated to display the design printed
                            on the chosen merchandise. Checking out the product sends the design file to a third-party
                            printer, who then ships the finished product directly to the customer.
                        </p>
                        <img className="project__image" src="images/printamerch-feature-02.jpg" />
                    </div>
                    <div className="proj-details__header" id="tools">Tools Used &amp; Explanation</div>
                    <div className="proj-details__text">
                        <p>This website was built on the Shopify platform. It was designed using a free theme which uses
                            Bootstrap and jQuery libraries. I edited the Liquid code to achieve the look I wanted 
                            and added Javascript codes to add functionalities like filtering products 
                            and blog posts by tags and displaying throbber overlay when the page reloads.
                        </p>
                        <img className="project__image" src="images/printamerch-feature-03.jpg" />
                        <p>With the help of a few plugins, I implemented the functionalities I wanted the 
                            store to have, such as the carousel on the homepage, image and video galleries, newsletter 
                            subscription, an improved wishlist, and integration of a payment gateway.
                        </p>
                        <p>The website copy follows search engine optimization guidelines. Using an SEO plugin, product 
                            descriptions and blog posts were carefully crafted to optimize the site for keywords. I 
                            post regularly on the blog to further enhance SEO.
                        </p>
                        <p>For the data analytics, the site has embedded Google Analytics tracking code, Facebook pixel, 
                            and Google Search Console meta tag.
                        </p>
                    </div>
                </div>
                
            </section>        

            <Footer />
     
        </div>
    
    );
}

export default Printamerch;