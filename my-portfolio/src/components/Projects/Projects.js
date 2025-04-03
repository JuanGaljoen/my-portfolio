import React from 'react';
import fenLogo from '../../assets/images/fenergo.jpg'
import vaLogo from '../../assets/images/vamilling.png'
import rivalLogo from '../../assets/images/rival.png'
import portfolioImg from '../../assets/images/portfolio.png'
import cryptoLogo from '../../assets/images/crypto.png'
import './Projects.css'

const enterpriseProjects = [
  { id: 1, name: 'VA Milling Console', description: 'Comprehensive business management system tailored for VA-Milling. It streamlines key operations including accounting, sales, production, and logistics. Quickbooks API integration for seamless accounting processes. The backend is built in Rust and the frontend in Flutter.', image: vaLogo },
  { id: 2, name: 'Fen-X External Data Adapter', description: 'Developed an external data adapter for Fen-X to intergrate Dunn and Bradstreets Direct+ API. Utilized .NET and AWS technologies to enable a seamless data exhange. Implemented IaC using Pulumi. ', image: fenLogo },
  { id: 3, name: 'Fen-X UI Project', description: 'Contributed to a Fenergo UI team where we worked on the core product, Fen-X, where we added new features to the user interface. Leveraged React and TypeScript to implement UI enhancements.', image: fenLogo },
];

const personalProjects = [
  { id: 1, name: 'Rival Labs Quote Generator', description: 'a Form that generates a personalised quote that is sent to the user via email. Frontend: React+Tailwind. The backend runs on a Lambda function that generates HTML and mails the quote with SES. The form is embedded in their existing WordPress site.', image: rivalLogo },
  { id: 2, name: 'This Website', description: 'Hosted at juanviljoen.com, this site showcases my skills and projects. Built with React, it uses AWS S3 and CloudFront for fast delivery, Lambda and DynamoDB for visitor tracking, and GitHub Actions with Terraform for seamless deployment.', image: portfolioImg },
  { id: 3, name: 'Crypto Tracker', description: 'This project delivers real-time crypto data using CoinGecko API, MongoDB Atlas for storage, and Redis for caching. Built with Next.js and TailwindCSS on the frontend, it features a TypeScript-based API server, ensuring fast performance and high concurrency.', image: cryptoLogo },
];


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
