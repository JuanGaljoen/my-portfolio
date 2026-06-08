import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import './Projects.css'
import { personalProjects, enterpriseProjects } from '../../data/projects.js'

const ProjectCard = ({ project, isOpen, onToggle }) => {
  // On touch / no-hover devices, tap the tile to toggle the detail overlay.
  // Desktop keeps pure CSS hover (handled in CSS), so we bail out there.
  const handleClick = (e) => {
    if (window.matchMedia('(hover: hover)').matches) return;
    if (e.target.closest('.project-link')) return; // let the GitHub link work
    e.stopPropagation(); // don't let the outside-click handler immediately close it
    onToggle();
  };

  return (
    <div className={`project-card${isOpen ? ' is-open' : ''}`} onClick={handleClick}>
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

      {/* Revealed on hover (desktop) / tap (mobile) */}
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
};

export const Projects = () => {
  // Which card is expanded on touch devices (only one at a time).
  const [openKey, setOpenKey] = useState(null);

  // Close the open card when the user scrolls or taps anywhere outside it.
  useEffect(() => {
    if (!openKey) return;
    const close = () => setOpenKey(null);
    window.addEventListener('scroll', close, { passive: true });
    document.addEventListener('click', close);
    return () => {
      window.removeEventListener('scroll', close);
      document.removeEventListener('click', close);
    };
  }, [openKey]);

  const toggle = (key) => setOpenKey((prev) => (prev === key ? null : key));

  const renderCards = (projects) =>
    projects.map((project) => (
      <ProjectCard
        key={project.name}
        project={project}
        isOpen={openKey === project.name}
        onToggle={() => toggle(project.name)}
      />
    ));

  return (
    <div id="projects-section">
      <h2 className="section-title">Projects</h2>
      <h3 className="section-subtitle">Personal/Freelance</h3>
      <div className="projects-container">{renderCards(personalProjects)}</div>
      <h3 className="enterprise-subtitle">Enterprise</h3>
      <div className="projects-container">{renderCards(enterpriseProjects)}</div>
    </div>
  );
};
