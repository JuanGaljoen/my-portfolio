import React from 'react';
import fenLogo from '../assets/images/fenergo.jpg'
import vaLogo from '../assets/images/vamilling.png'
import abakusLogo from '../assets/images/abakus.png'
import rivalLogo from '../assets/images/rival.png'

const projects = [

  { id: 1, name: 'Rival Labs Quote Generator', description: 'a Form where clients can generate a personalised quote that is sent to them via email. I used React and Tailwind with shadcn components. The backend runs on a Lambda function that generates HTML and mails the quote with SES. The form is embedded in their existing WordPress site.', image: rivalLogo },
  { id: 2, name: 'VA Milling Console', description: 'Developed a comprehensive business management system tailored for Agri-Manufacturing for our client, VA-Milling. It streamlines key operations including accounting, sales, production, and logistics. The system integrates with the Quickbooks API for seamless accounting processes. The backend is built in Rust and the frontend in Flutter.', image: vaLogo },
  { id: 3, name: 'Learning Management Platform', description: 'This solution streamlined administrative workflows and simplified operations. Initially built using legacy code, I successfully rebuilt the platform, enhancing its functionality and modernizing its architecture.', image: abakusLogo },
  { id: 4, name: 'Fen-X External Data Adapter', description: 'Developed an external data adapter for Fen-X to intergrate Dunn and Bradstreets Direct+ API. Utilized .NET and AWS technologies to enable a seamless data exhange. Implemented IaC using Pulumi. ', image: fenLogo },
  { id: 5, name: 'Fen-X UI Project', description: 'Contributed to a Fenergo UI team where we worked on the core product, Fen-X, where we added new features to the user interface. Leveraged React and TypeScript to implement UI enhancements.', image: fenLogo },
];

export const Projects = () => {

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
