import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Software Testing",
      description: "Certification for Introduction to Mobile Application Testing",
      imgUrl: projImg1,
    },
    {
      title: "Test Automation",
      description: "Certification for Setting a foundation for Successful Test Automation",
      imgUrl: projImg2,
    },
    {
      title: "Code Rush",
      description: "Certification for Intra Faculty Coding Competition",
      imgUrl: projImg3,
    },
    {
      title: "Hack Moral 4.0",
      description: "Certification for Mini Hackathon Competition",
      imgUrl: projImg4,
    },
    {
      title: "AIESEC",
      description: "Certification for dedication as an OC member of Qualifier 1.0",
      imgUrl: projImg5,
    },
    {
      title: "Software Testing",
      description: "Certification for Software Testing Tutorial",
      imgUrl: projImg6,
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
                <h2>My Work</h2>
                <p>Welcome to the heart of my digital journey – the 'My Work' section. Here, you'll find the culmination of my passion and dedication in the form of certifications that validate my expertise, media articles where I share insights and discoveries, and projects that reflect my commitment to crafting innovative solutions. Each entry is a testament to my continuous quest for knowledge, creativity, and the pursuit of excellence. Dive in, explore, and witness the story of my professional evolution!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Certifications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Media Articles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Projects</Nav.Link>
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
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
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