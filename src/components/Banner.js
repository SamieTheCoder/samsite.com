import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 50); // Adjusted delta for faster typing
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "App Developer", "Data Entry Automator" ];
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) // Delete one character
      : fullText.substring(0, text.length + 1); // Add one character

    setText(updatedText);

    if (isDeleting) {
      setDelta(150); // Faster deletion by setting a smaller delta
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); // Delay before deletion starts
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100); // Reset to default speed for typing
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Samie`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "App Developer", "Data Entry Automator" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Explore the creative and technical journey of Md Samie, a passionate software developer with expertise in web development, automation, and innovative software solutions.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
