import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { Icon } from "@iconify/react";
import './Experience.css'
import { experiences } from "../../data/experience";

export const Experience = () => {
  return (
    <section id="experience" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title experience-title">
            <span className="text-grey">
              Work Experience
            </span>
          </h1>
        </div>
      </div>

      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.company}
              className="vertical-timeline-element--work"
              date={exp.date}
              iconStyle={{
                background: exp.backgroundColor,
                color: "white",
                textAlign: "center",
              }}
              icon={<Icon icon={exp.icon} className="experience-icon" />}
            >
              <div className="exp-badge-top">
                <Badge pill className="main-badge">
                  {exp.industry}
                </Badge>
              </div>
              <h3 className="vertical-timeline-element-title">
                {exp.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {exp.company}
              </h4>
              {exp.tech && (
                <div className="exp-badge-list">
                  {exp.tech.map((badge) => (
                    <Badge key={badge} pill className="experience-badge">
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}
              {exp.description && (
                <p className="exp-description">{exp.description}</p>
              )}
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
