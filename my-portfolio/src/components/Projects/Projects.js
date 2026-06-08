import React from 'react';
import { Icon } from '@iconify/react';
import './Projects.css'
import { personalProjects, enterpriseProjects } from '../../data/projects.js'

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-logo">
      {project.icon ? (
        <div className="project-brand">
          <Icon icon={project.icon} className="project-brand-icon" />
          {project.wordmark && <span className="project-brand-name">{project.wordmark}</span>}
        </div>
      ) : (
        <img src={project.image} alt={project.name} className="project-image" />
      )}
    </div>

    {/* Always-visible caption */}
    <div className="project-titlebar">
      <h3 className="project-title">{project.name}</h3>
    </div>

    {/* Revealed on hover (desktop) / shown statically (mobile) */}
    <div className="project-overlay">
      <div className="project-overlay-body">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">{project.description}</p>
      </div>
      <div className="project-overlay-footer">
        {project.tech && (
          <div className="project-tech">
            {project.tech.map((tag) => (
              <span key={tag} className="project-badge">{tag}</span>
            ))}
          </div>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
            <Icon icon="mdi:github" />
            <span>View code</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

export const Projects = () => {
  return (
    <div id="projects-section">
      <h2 className="section-title">Projects</h2>
      <h3 className="section-subtitle">Personal/Freelance</h3>
      <div className="projects-container">
        {personalProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <h3 className="enterprise-subtitle">Enterprise</h3>
      <div className="projects-container">
        {enterpriseProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
