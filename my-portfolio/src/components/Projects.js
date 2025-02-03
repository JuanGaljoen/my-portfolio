import React from 'react';
import fenLogo from '../assets/images/fenergo.jpg'
import vaLogo from '../assets/images/vamilling.png'
import abakusLogo from '../assets/images/abakus.png'

const projects = [
  { id: 1, name: 'Fen-X External Data Adapter', description: 'Developed an external data adapter for Fen-X to intergrate Dunn and Bradstreets Direct+ API. Utilized .NET and AWS technologies to enable a seamless data exhange. Implemented IaC using Pulumi. ', image: fenLogo },
  { id: 2, name: 'Fen-X UI Project', description: 'Contributed to a Fenergo UI team where we worked on the core product, Fen-X, where we added new features to the user interface. Leveraged React and TypeScript to implement UI enhancements.', image: fenLogo },
  { id: 3, name: 'VA Milling Console', description: 'Developed a comprehensive business management system tailored for Agri-Manufacturing for our client, VA-Milling. It streamlines key operations including accounting, sales, production, and logistics. The system integrates with the Quickbooks API for seamless accounting processes. The backend is built in Rust and the frontend in Flutter.', image: vaLogo },
  { id: 4, name: 'Abakus Learning Management Platform', description: 'Learning Management Platform: For Abakus Enrichment, we developed a comprehensive platform to manage hours, payments, tutors, students, and schools. This solution streamlined administrative workflows and simplified operations. Initially built using legacy code, I successfully rebuilt the platform, enhancing its functionality and modernizing its architecture.', image: abakusLogo },
];

export const Projects = ({ project }) => {

  return (
    <div id="projects-section">
      <h2 className="section-title">Projects</h2>
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
