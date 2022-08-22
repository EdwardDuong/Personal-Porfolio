import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg6 from "../assets/img/project-img2.png";
import projImg1 from "../assets/img/fitness.png";
import projImg7 from "../assets/img/project-img3.png";
import projImg2 from "../assets/img/linked.png";
import projImg3 from "../assets/img/delivery.png";
import projImg4 from "../assets/img/traveladvice.png";
import projImg5 from "../assets/img/booking.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useEffect } from "react";
import axios from "axios";
export const Projects = () => {
  const fetch = async () => {
    const data = await axios
      .get("http://localhost:3000/projects")
      .then((response) => console.log(response.data));
  };
  useEffect(() => {
    fetch();
  }, []);
  const projects = [
    {
      title: "Business Startup",
      description: "Developed a web app for a gym center",
      imgUrl: projImg1,
      url: "https://github.com/EdwardDuong/Fitness",
    },
    {
      title: "Social Web-page",
      description: "Linked-in clone page with few useable functions",
      imgUrl: projImg2,
      url: "https://github.com/EdwardDuong/LinkedIn-Clone",
    },
    {
      title: "Business Startup",
      description: "A web page for a pizza store",
      imgUrl: projImg3,
      url: "https://github.com/EdwardDuong/Delivery-app",
    },
    {
      title: "Tools web",
      description: "Recommendation tools for travel based on picked location",
      imgUrl: projImg4,
      url: "https://github.com/EdwardDuong/TravelAdvisor",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
      url: "abc",
    },
    {
      title: "Business Startup",
      description: "Developed a web app based on Booking.com",
      imgUrl: projImg6,
      url: "abc",
    },
  ];
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    All projects that I have done in my uni journey and my
                    self-learning
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
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
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          All projects that I have done in my uni journey and my
                          self-learning
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          All projects that I have done in my uni journey and my
                          self-learning
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
