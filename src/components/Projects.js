import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Data Entry Wizard",
      description: "Automation Software",
      imgUrl: projImg1,
    },
    {
      title: "Dynamic Slider",
      description: "Web Slider",
      imgUrl: projImg2,
    },
    {
      title: "Industrial Website",
      description: "Web Design Website",
      imgUrl: projImg3,
    },
    {
      title: "Data Entry Wizard",
      description: "Automation Software",
      imgUrl: projImg1,
    },
    {
      title: "Dynamic Slider",
      description: "Web Slider",
      imgUrl: projImg2,
    },
    {
      title: "Industrial Website",
      description: "Web Design Website",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Discover projects that merge creativity with cutting-edge technologies such as Python, customtkinter, Selenium, and more. Each project reflects a dedication to solving real-world problems through innovation and simplicity.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Let’s build the future together—whether it's crafting unique web experiences, automating workflows, or creating intelligent applications.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Let’s build the future together—whether it's crafting unique web experiences, automating workflows, or creating intelligent applications.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
