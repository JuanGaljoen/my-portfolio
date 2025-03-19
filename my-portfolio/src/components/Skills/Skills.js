import React from "react";
import { Icon } from '@iconify/react';
import './Skills.css'

export const Skills = () => {
    const sectionName = "Skills";

    const skills = [
        { name: "C#", icon: "mdi:language-csharp" },
        { name: "Rust", icon: "mdi:language-rust" },
        { name: "TypeScript", icon: "mdi:language-typescript" },
        { name: "JavaScript", icon: "mdi:language-javascript" },
        { name: "React", icon: "mdi:react" },
        { name: "Flutter", icon: "mdi:alpha-f" },
        { name: "MySql", icon: "mdi:database" },
        { name: "AWS", icon: "mdi:aws" },
        { name: "Tailwind", icon: "mdi:tailwind" },
        { name: "HTML", icon: "mdi:language-html5" },
        { name: "CSS", icon: "mdi:language-css3" },
    ];

    return (
        <section id="skills">
            <h2 className="section-title">{sectionName}</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skills-tile">
                        <Icon icon={skill.icon} className="skill-icon" />
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
