import React from 'react'
import { Link } from 'react-router-dom'

function AboutText() {

    return (
        <section id="aboutStory" className="section">
            <div className="container-fluid-small">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-left anim-bot">
                        <h2 className="big-title anim-bot">We're a bunch of design <br /> passionate folks.</h2>
                        <Link to='/Portfolio'>View projects</Link>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-right anim-right">
                        <div className="story">
                            <p className="big-p">Our Mission TO PROVIDE THE BEST SOLUTION FOR ART SERVICES
                            TO THE GAME, VR/AR, AND FILM INDUSTRIES.
                            With professional project management systems, effective communication, and outstanding production workflow, BOSi provides the most comprehensive art outsourcing solutions for our clients and become the quality benchmark for the external art services industry.
                            Our goal is to become the quality benchmark for the external art services industry.OUR VALUESBelief is the foundation for our growth
                            Obligation is our dedication to learning
                            Sharing is how we become stronger
Innovation is our path to the future .</p>
                        </div>
                    </div>

                    <div className="col-xl-3"></div>

                    <div className="col-xl-3"></div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 story-bottom anim-bot">
                        <ul>
                            <li>7 Years of Experience</li>
                            <li>22 Completed Projects</li>
                            <li>41 Happy Customers</li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 story-bottom anim-bot">
                        <ul>
                            <li>Award Winning Agency</li>
                            <li>Aesthetics Oriented Team</li>
                            <li>Marketing Strategy Experts</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default AboutText