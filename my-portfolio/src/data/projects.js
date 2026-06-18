import fenLogo from '../assets/images/fenergo.jpg'
import vaLogo from '../assets/images/vamilling.png'

export const personalProjects = [
    { id: 1, name: 'Ring CAD', description: 'A parametric CAD tool that turns seven ring parameters (or an uploaded photo) into a watertight, casting-ready STL for lost-wax manufacturing. Constraints are enforced in the geometry itself, with automatic mesh validation and repair. Includes a Three.js preview and Claude-vision photo estimation.', icon: 'mdi:ring', wordmark: 'RING CAD', github: 'https://github.com/JuanGaljoen/cadlerry-', tech: ['Python', 'Flask', 'OpenSCAD', 'Trimesh', 'Three.js', 'Claude API'] },
    { id: 2, name: 'This Website', description: 'Hosted at juanviljoen.com, this site showcases my skills and projects. Built with React, it uses AWS S3 and CloudFront for fast delivery, Lambda and DynamoDB for visitor tracking, and GitHub Actions with Terraform for seamless deployment.', icon: 'la:laptop-code', wordmark: 'JUAN VILJOEN', github: 'https://github.com/JuanGaljoen/my-portfolio', tech: ['React', 'S3', 'CloudFront', 'Terraform'] },
    { id: 3, name: 'Ice Inventory System', description: 'A production inventory system for an ice manufacturer, replacing manual stock tracking. Role-based access, an append-only audit log of every stock movement, and database-level integrity via Postgres triggers and row-level security. Includes commission tracking, low-stock alerts, and CSV reports.', icon: 'mdi:snowflake', wordmark: 'ICE INVENTORY', github: 'https://github.com/JuanGaljoen/cool-runnings', tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind'] },
];

export const enterpriseProjects = [
    { id: 1, name: 'VA Milling Console', description: 'Comprehensive business management system tailored for VA-Milling. It streamlines key operations including accounting, sales, production, and logistics. Quickbooks API integration for seamless accounting processes. The backend is built in Rust and the frontend in Flutter.', image: vaLogo, tech: ['Rust', 'Flutter', 'QuickBooks API'] },
    { id: 2, name: 'Fen-X External Data Adapter', description: 'Developed an external data adapter for Fen-X to integrate Dunn and Bradstreets Direct+ API. Utilized .NET and AWS technologies to enable a seamless data exchange. Implemented IaC using Pulumi. ', image: fenLogo, tech: ['.NET', 'AWS', 'Pulumi'] },
    { id: 3, name: 'Fen-X UI Project', description: 'Contributed to a Fenergo UI team where we worked on the core product, Fen-X, where we added new features to the user interface. Leveraged React and TypeScript to implement UI enhancements.', image: fenLogo, tech: ['React', 'TypeScript'] },
];
