import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { Icon } from "@iconify/react";
import './Experience.css'

export const Experience = () => {
  const sectionName = "Work Experience";
  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "Culture Systems",
      date: "Jul 2024 - Present",
      icon: "mdi:language-rust",
      backgroundColor: "#404040",
      badges: ["Agri-Manufacturing", "Flutter, ", "Rust"],
    },
    {
      title: "Software Engineer Intern",
      company: "Kaha",
      date: "Oct 2023 - June 2024",
      icon: "mdi:language-csharp",
      backgroundColor: "#404040",
      badges: ["Fintech", "C# .NET, ", "React, ", "AWS"],
    },
    {
      title: "Jewellery Designer",
      company: "Self Employed",
      date: "Oct 2014 - 2023",
      icon: "mdi:diamond",
      backgroundColor: "#404040",
      badges: [
        "Design",
        "Designing custom engagement rings and jewellery. ",
        "Communicating with customers. ",
        "Providing beneficial advice and support. ",
        "Maintaining a loyal customer base.",
      ],
    },
  ];

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
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={exp.date}
              iconStyle={{
                background: exp.backgroundColor,
                color: "white",
                textAlign: "center",
              }}
              icon={<Icon icon={exp.icon} style={{ fontSize: '40px' }} />}
            >
              <div style={{ textAlign: "left", marginBottom: "4px" }}>
                <Badge pill className="main-badge mr-2 mb-2">
                  {exp.badges[0]}
                </Badge>
              </div>
              <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
                {exp.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
                {exp.company}
              </h4>
              <div style={{ textAlign: "left", marginTop: "15px" }}>
                {exp.badges.slice(1).map((badge, i) => (
                  <Badge key={i} pill className="experience-badge mr-2 mb-2">
                    {badge}
                  </Badge>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            iconStyle={{
              background: "#404040",
              color: "white",
              textAlign: "center",
            }}
            icon={<Icon icon="mdi:hourglass" style={{ fontSize: '40px', color: 'white' }} />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};
