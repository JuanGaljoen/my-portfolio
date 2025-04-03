import React from 'react';
import './Projects.css'
import { personalProjects, enterpriseProjects } from '../../data/projects.js'

export const Projects = () => {
  return (
    <div id="projects-section">
      <h2 className="section-title">Projects</h2>
      <h3 className="section-subtitle">Personal/Freelance</h3>
      <div className="projects-container">
        {personalProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-overlay">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-icon">
                <span className="iconify" data-icon="mdi:github"></span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <h3 className="enterprise-subtitle">Enterprise</h3>
      <div className="projects-container">
        {enterpriseProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-overlay">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
