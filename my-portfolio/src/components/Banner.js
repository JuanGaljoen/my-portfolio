import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  // State variables used for text rotation animation
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  const toRotate = ["Cloud Engineer", "Full Stack Web Developer", "Entrepreneur"];
  const period = 2000; // Time period between text rotations

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  // Function to handle text rotation
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio!</span>
                  <h1 className="name-heading">{`Hi! I'm Juan,`} <span className="" dataPeriod="1000" data-rotate='[ " Full Stack Web Developer", "Entrepreneur", "Jeweller" ]'><span className="wrap">{text}</span></span></h1>
                  <p className="intro-paragraph">I am an enthusiastic and ambitious developer with experience in full-stack development, working with React and C# .NET and AWS. My professional journey is marked by a strong sense of pride and ownership in my work, understanding its critical impact on the overall success of the business. As a critical thinker and problem solver, I excel in fast-paced, agile environments that prioritize continuous learning and improvement. My commitment to delivering high-quality solutions drives meto stay at the forefront of technology and development practices.</p>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
