import React from 'react';
import { Icon } from '@iconify/react';
import './Skills.css';
import { skills } from '../../data/skills';

export const Skills = () => {
    return (
        <section id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills-container">
                {skills.map((skill) => (
                    <div key={skill.id} className="skills-tile">
                        <Icon icon={skill.icon} className="skill-icon" />
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
