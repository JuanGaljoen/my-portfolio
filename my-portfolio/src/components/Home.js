import { TypeAnimation } from "react-type-animation";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
  const sectionName = "Juan Viljoen";
  return (
    <Container className="banner" id="home">
      <Row className="align-items-center">
        <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
        <h1 className="section-title" style={{ color: "black" }}>
          <span className="text-grey" style={{ textAlign: "center" }}>
            {sectionName}
          </span>
        </h1>
        <TypeAnimation
          sequence={[
            "FULL STACK DEVELOPER",
            2000,
            "ENTREPRENEUR",
            2000,
            "TECH ENTHUSIAST",
            2000,
          ]}
          wrapper="span"
          repeat={Infinity}
          cursor={true}
          className="wrap" // Add your class name here
        />
      </Row>
    </Container>
  );
};
