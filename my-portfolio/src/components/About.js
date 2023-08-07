import pic1 from "../images/mePic.jpg"
import React from "react";
import samplePDF2 from '../Resume/JuanViljoenResume.pdf';

//define the About component 
export const About = () => {

    //return jsx representing the about section
    return (
        <div className="about-container">
            <div className="about" id="aboutme" xs={12} md={6} xl={7}>
                <h2>About me</h2>
                <p>
                    I am thrilled to take my first step into the world of Cloud Engineering, driven by my passion for cutting-edge technologies and their profound impact on businesses and individuals. While my background is in fine jewellery design,
                    I want to change my career path for future growth potential and new challenges. As an aspiring Cloud Engineer, I find immense joy in problem-solving and have a relentless drive to learn and grow in this dynamic field. <br></br><br></br>
                    <img className="background-about-image" src={"https://i.pinimg.com/564x/81/8f/4a/818f4a120483279ef50b769acf8188a6.jpg"} alt="astronaut" xs={12} md={6} xl={7}></img>
                    In my spare time I'm either working on an old Vespa, cycling, taking my dog for a hike/fishing trip or spending time with friends. I am very passionate about music, classic cars and motorbikes.
                </p>

                <a className="resume-button" href={samplePDF2} target="_blank"
                    rel="noreferrer">
                    Click here to view my resume
                </a>

                <br></br> <br></br>

                <div className="profileImg"><img role="presentation" className="me-pic" src={pic1} width="100" alt="profile pic" /></div>
            </div>
        </div>

    )
}  