import React from "react";
import { Icon } from '@iconify/react';

export const Skills = () => {
    const sectionName = "Skills";

    const skills = [
        { name: "HTML 5", icon: "mdi:language-html5" },
        { name: "CSS 3", icon: "mdi:language-css3" },
        { name: "React", icon: "mdi:react" },
        { name: "TypeScript", icon: "mdi:language-typescript" },
        { name: "JavaScript", icon: "mdi:language-javascript" },
        { name: "Flutter", icon: "mdi:alpha-f" },
        { name: "Bootstrap", icon: "mdi:bootstrap" },
        { name: "C#", icon: "mdi:language-csharp" },
        { name: "MySql", icon: "mdi:database" },
        { name: "Rust", icon: "mdi:language-rust" },
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
