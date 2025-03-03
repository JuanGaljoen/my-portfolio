import React from "react";
import resume from '../../assets/resume/Juan_Viljoen_resume.pdf';
import './About.css'

export const About = () => {
    const sectionName = "About Me";
    return (
        <div className="about-container">
            <div className="about" id="aboutme" xs={12} md={6} xl={7}>
                <h1 className="section-title" style={{ color: "black" }}>
                    <span className="text-grey" style={{ textAlign: "center" }}>
                        {sectionName}
                    </span>
                </h1>
                <p>
                    I am a passionate full-stack developer with hands-on experience in software development and a strong foundation in cloud computing. Continuously learning new technologies, I strive to build scalable, secure, and reliable solutions. I thrive in collaborative environments and am eager to contribute to innovative teams and drive organizational success.
                    <br></br><br></br>
                    In my spare time I'm either working on an old Vespa, cycling, taking my dog for a hike/fishing trip or spending time with friends. I am very passionate about music, classic cars and motorbikes.
                </p>
                {/* <div className="profileImg"><img role="presentation" className="me-pic" src={pic1} width="100" alt="profile pic" /></div> */}
                <a className="resume-button" href={resume} target="_blank" rel="noreferrer">
                    view resume
                </a>
            </div>
        </div>

    )
}  