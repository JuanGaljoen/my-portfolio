import React from 'react';
import fenLogo from '../assets/images/fenergo.jpg'
import vaLogo from '../assets/images/vamilling.png'


const projects = [
  { id: 3, name: 'VA Milling Console', description: 'Developed a comprehensive business management system tailored for Agri-Manufacturing for our client, VA-Milling. It streamlines key operations including accounting, sales, production, and logistics. The system integrates with the Quickbooks API for seamless accounting processes. The backend is built in Rust and the frontend in Flutter.', image: vaLogo },
  { id: 1, name: 'Fen-X External Data Adapter', description: 'Developed an external data adapter for Fen-X to intergrate Dunn and Bradstreets Direct+ API. Utilized .NET and AWS technologies to enable a seamless data exhange. We used Pulumi for IaC. ', image: fenLogo },
  { id: 2, name: 'Fen-X UI Project', description: 'Contributed to a Fenergo UI team where we worked on the core product, Fen-X, where we added new features to the user interface. Leveraged React and TypeScript to implement UI enhancements.', image: fenLogo },
];

export const Projects = ({ project }) => {

  return (
    <div id="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
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
