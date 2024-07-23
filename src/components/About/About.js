import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Chapters from "./Chapters";
import Aboutcard from "./AboutCard";
import aboutDago from "../../Assets/about.JPG";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Presentación:</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={aboutDago} alt="about" className="img-fluid"/>
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Chapters </strong>
        </h1>
        <Chapters />
      </Container>
    </Container>
  );
}

export default About;
