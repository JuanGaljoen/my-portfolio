// import React, { useEffect, useState } from 'react';

// const { REACT_APP_API_URL } = process.env

// export const Footer = () => {
//   const [views, setViews] = useState(0);

//   useEffect(() => {
//     fetch(`${REACT_APP_API_URL}`,
//       { method: 'GET' })
//       .then(response => response.json())
//       .then(data => setViews(data));
//   }, []);

//   return (
//     <div>
//       <i class="fa fa-user medium-icon"></i>
//       <span class="counter-title"> Visitor count </span>
//       <span class="timer counter alt-font appear" data-to={views} data-speed="7000">{views}</span>
//     </div>

//   );
// };


import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

export const Experience = () => {
  // Hardcoded basic info
  const resumeBasicInfo = {
    section_name: {
      experience: "Work Experience",
    },
  };

  // Hardcoded experience data
  const resumeExperience = [
    {
      title: "Junior Software Engineer",
      company: "Culture Systems",
      years: "Jul 2024 - Present",
      mainTech: ["Agri-Manufacturing"],
      technologies: ["Flutter, ", "Rust"],
    },
    {
      title: "Software Engineer Intern",
      company: "Kaha",
      years: "Oct 2023 - June 2024",
      mainTech: ["Fintech"],
      technologies: ["C# .NET, ", "React, ", "AWS"],
      icon: "mdi:language-rust"
    },
    {
      title: "Jewellery Designer",
      company: "Self Employed",
      years: "Oct 2014 - 2023",
      mainTech: [],
      technologies: ["Designing original custom engagement rings and other jewelllery in compliance with high company standards. ", "Communicating with customers to ensure that their requirements were fully met. ", "Assisting customers in selection of jewellery and providing beneficial advice and support. ", "Maintaining a loyal customer base."],
    },
  ];

  const sectionName = resumeBasicInfo.section_name.experience;

  const work = resumeExperience.map((work, i) => {
    const technologies = work.technologies;
    const mainTechnologies = work.mainTech;

    const mainTech = mainTechnologies.map((technology, index) => (
      <Badge pill className="main-badge mr-2 mb-2" key={index}>
        {technology}
      </Badge>
    ));

    const tech = technologies.map((technology, index) => (
      <Badge pill className="experience-badge mr-2 mb-2" key={index}>
        {technology}
      </Badge>
    ));

    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={work.years}
        iconStyle={{
          background: "#AE944F",
          color: "yellow",
          textAlign: "center",
        }}
        icon={<i icon="mdi:language-rust"></i>}
        key={i}
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          {mainTech}
        </div>

        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          {work.title}
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          {work.company}
        </h4>
        <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
      </VerticalTimelineElement>
    );
  });

  return (
    <section id="experience" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-grey" style={{ textAlign: "center" }}>
              {sectionName}
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {work}
          <VerticalTimelineElement
            iconStyle={{
              backgroundColor: "grey",
              color: "#fff",
              textAlign: "center",
            }}
            icon={
              <i className="fas fa-hourglass-start mx-auto experience-icon" color="black" ></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section >
  );
};


