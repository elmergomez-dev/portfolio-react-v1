import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";


function Home() {
  return (
      
        <main ID="home">

            <Header />

            {/* Introduction */}
            <section className="intro" id="home">
                <h1 className="section__title section__title--intro">
                    Hi, I'm <strong>Elmer Gomez</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">Front-End Web Developer</p>
                <img className="intro__img img__profile" src="images/elmer-gomez.jpeg" alt="picture of Elmer Gomez smiling" />
            </section>

            {/* My Skills */}
            <section className="my-services" id="services">

                <h2 className="section__title section__title--services">What I do</h2>
                <div className="services">
                    <div className="service service-1">
                        <img className="img__icon" src="images/design-devt.jpg" alt="" />
                        <h3>Design + Development</h3>
                        <p>I strive to blend the best of both 
                            worlds: efficient functionality and beautiful design. Writing clean code and creating 
                            effective UI/UX are integral to my job as a front-end developer.
                        </p>
                    </div> {/* / service */}
                    
                    <div className="service service-2">
                        <img className="img__icon" src="images/e-commerce.jpg" alt="" />
                        <h3>E-Commerce</h3>
                        <p>I have practical experience with e-commerce and have developed projects from the ground up. 
                        I create online stores that are not only good to look at, but are efficient under the hood.
                        </p>
                    </div> {/* / service */}
                    
                    <div className="service service-3">
                        <img className="img__icon" src="images/wordpress-shopify.jpg" alt="" />
                        <h3>WordPress + Shopify</h3>
                        <p>Currently, I utilize the WordPress CMS to 
                            quickly develop professional-looking websites and the Shopify platform to develop a complete solution for an online store.
                        </p>
                    </div> {/* / service */}
                </div> {/* / services */}
                <div className="services__skills"><span className="services__skills--text">Technologies I currently use: WordPress, Shopify Liquid, HTML+CSS+Javascript, React, Bootstrap, jQuery</span></div>
                <div className="services__skills"><span className="services__skills--text">Other technologies I used in the past: Drupal, Joomla, PHP, SQL, ASP</span></div>

                <a href="#work" className="btn">My work</a>
            </section>
            
            {/* About me */}
            <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Designer & developer based in Quezon City PH</p>
            
            <div className="about-me__body">
                <p>I am a front-end web developer. Before becoming a programmer, I worked as a graphic designer.
                </p>
                <p>I was a technology officer in a government agency before turning independent to jump-start a business. When I 
                    learned about open source CMS, I used Drupal and Joomla to develop systems and databases during my 
                    stay there.
                </p>
                <p>I'm also a bibliophile. I hoard books in the literary fiction genre. I can usually be found in a coffee shop 
                    working on my code with a hardback on the side.
                </p>
            </div>
            
            <img src="images/elmer-gomez-half-body.jpg" alt="Elmer Gomez standing in front of murals" className="about-me__img" />
            </section>

            {/* My recent projects */}
            <section className="my-work" id="work">
                <h2 className="section__title">My recent projects</h2>
                <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
                <div className="portfolio">
                    {/* Portfolio item 01 */}
                    <Link to="/printamerch" className="portfolio__item">
                        <img src="images/portfolio-01.jpg" alt="" className="portfolio__img" />
                    </Link>
                    
                    {/* Portfolio item 02 */}
                    <Link to="/bookishbay" className="portfolio__item">
                        <img src="images/portfolio-02.jpg" alt="" className="portfolio__img" />
                    </Link>
                    
                    {/* Portfolio item 03 */}
                    <Link to="/downloadtoprint" className="portfolio__item">
                        <img src="images/portfolio-03.jpg" alt="" className="portfolio__img" />
                    </Link>
                </div>
                <div className="label-tag">
                    <Link to="/moreprojects" className="label-tag__link">See more projects</Link>&nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
                </div>
            </section>    

            <Footer />

        </main>
       
  );
}

export default Home;