import { Col } from "react-bootstrap";

// Functional component representing a project card
export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    // The Col component from react-bootstrap, defining the column size for the project card
    <Col size={4} sm={6} md={4} lg={3} xl={3}>
      {/* Container for the project card */}
      <div className="proj-imgbx">
        {/* Link to the project, opens in a new tab */}
        <a className="project-image" href={link} target="_blank" rel="noreferrer">
          {/* Project image */}
          <img className="image-proj" src={imgUrl} alt="project-visual" />
        </a>
        {/* Container for project title and description */}
        <div className="proj-txtx">
          {/* Project title */}
          <h4>{title}</h4>
          {/* Project description */}
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
