import React, { Fragment } from "react";
import resume from '../../assets/resume/Juan_Viljoen_Resume.pdf';
import { aboutParagraphs } from '../../data/about';
import './About.css'

export const About = () => {
    return (
        <div className="about-container">
            <div className="about" id="aboutme">
                <h1 className="section-title about-title">
                    <span className="text-grey">
                        About me
                    </span>
                </h1>
                <p>
                    {aboutParagraphs.map((paragraph, i) => (
                        <Fragment key={i}>
                            {i > 0 && <><br /><br /></>}
                            {paragraph}
                        </Fragment>
                    ))}
                </p>
                <a className="resume-button" href={resume} target="_blank" rel="noreferrer">
                    view resume
                </a>
            </div>
        </div>
    )
}
