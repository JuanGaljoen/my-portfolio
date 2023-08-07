import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  // State variables used for text rotation animation
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  
  // Array of texts to be rotated
  const toRotate = ["Cloud Engineer","Full Stack Web Developer", "Entrepreneur"];
  const period = 2000; // Time period between text rotations

  // useEffect hook to handle the text rotation animation
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    // Cleanup function to clear the interval when the component unmounts
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

  // JSX representing the 'Banner' section
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* Using 'TrackVisibility' to add fadeIn animation when the component is visible */}
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio!</span>
                  {/* The text rotation effect */}
                  <h1 className="name-heading">{`Hi! I'm Juan,`} <span className="" dataPeriod="1000" data-rotate='[ " Full Stack Web Developer", "Entrepreneur", "Jeweller" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Enthusiastic about joining the world of Cloud Engineering, I am driven by a passion for cutting-edge technologies and problem-solving. My hands-on experience with AWS, combined with a strong foundation in cloud computing principles, enables me to contribute to scalable, secure, and reliable cloud infrastructures. I also have experience in building full stack web applications using the MERN stack. I eagerly seek opportunities to collaborate with talented teams, optimize cloud environments, and support organizations in achieving their goals. Let's connect and explore how my expertise can add value to your projects and team. I am ready to make a positive impact as a Cloud Engineer. </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* The Col element on the right side */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
