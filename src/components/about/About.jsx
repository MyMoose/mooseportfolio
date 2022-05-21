import React from 'react'
import './about.css'
import MySelf3 from '../../assets/MySelf3.PNG'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

export const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={MySelf3} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Most Recent Project</h5>
                            <small>Trainsquare</small>
                        </article>
                    </div>

                    <p>
                        During my time in Trainsquare, I have worked on:
                        <li>
                            <ol>1. Implemented email service using Seng Grid</ol>
                            <ol>2. Developed two-factor authentication using Twilio</ol>
                            <ol>3. Made wizard steps using React-Loki</ol>
                        </li>
                    </p>


                    <a href="#contact" id="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About