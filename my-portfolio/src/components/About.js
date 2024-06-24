import pic1 from "../images/mePic.jpg"
import React from "react";
import resume from '../Resume/Juan_Viljoen_resume.pdf';

//define the About component 
export const About = () => {

    //return jsx representing the about section
    return (
        <div className="about-container">
            <div className="about" id="aboutme" xs={12} md={6} xl={7}>
                <h2>About me</h2>
                <p>
                    I am driven by a passion for cutting-edge technologies and problem-solving. My hands-on experience with software development, combined with a strong foundation in cloud computing principles, enables me to contribute to scalable, secure, and reliable cloud infrastructures. I eagerly seek opportunities to collaborate with talented teams and support organizations in achieving their goals.
                    <br></br><br></br>
                    <img className="background-about-image" src={"https://i.pinimg.com/564x/81/8f/4a/818f4a120483279ef50b769acf8188a6.jpg"} alt="astronaut" xs={12} md={6} xl={7}></img>
                    In my spare time I'm either working on an old Vespa, cycling, taking my dog for a hike/fishing trip or spending time with friends. I am very passionate about music, classic cars and motorbikes.
                </p>

                <a className="resume-button" href={resume} target="_blank"
                    rel="noreferrer">
                    Click here to view my resume
                </a>

                <br></br> <br></br>

                <div className="profileImg"><img role="presentation" className="me-pic" src={pic1} width="100" alt="profile pic" /></div>
            </div>
        </div>

    )
}  