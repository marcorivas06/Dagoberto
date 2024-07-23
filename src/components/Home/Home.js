import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homePage from "../../Assets/homePage.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                In loving memory
              </h1>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homePage}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius:100 }}
              />
            </Col>

              <h1 className="heading-name">
                <strong className="main-name"> DAGOBERTO ROJAS</strong>
              </h1>
            </Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
