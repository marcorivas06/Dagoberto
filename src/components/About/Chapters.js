import React, { useState, useRef, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Celiaynono } from "../../data/Celiaynono";
import { Conclusiones } from "../../data/Conclusiones";
import { Dagmelys } from "../../data/Dagmelys";
import { Introduccion } from "../../data/Introduccion";
import { Lester } from "../../data/Lester";
import { Lienyliliana } from "../../data/Lienyliliana";
import { Marcos } from "../../data/Marcos";
import { Olgayquiquito } from "../../data/Olgayquiquito";
import { Vera } from "../../data/Vera";
import { Yuniel } from "../../data/Yuniel";
import { Gabi } from "../../data/Gabi";

function Chapters() {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const chapterRefs = useRef(new Array()); // Create an array of refs

  const chapters = [
    { name: "Introduccion", renderComponent: <Introduccion /> },
    { name: "Dagmelis", renderComponent: <Dagmelys /> },
    { name: "Lester", renderComponent: <Lester /> },
    { name: "Marcos", renderComponent: <Marcos /> },
    { name: "Gabi", renderComponent: <Gabi /> },
    { name: "Vera", renderComponent: <Vera /> },
    { name: "Yuniel", renderComponent: <Yuniel /> },
    { name: "Lien Lili", renderComponent: <Lienyliliana /> },
    { name: "Celia Nono", renderComponent: <Celiaynono /> },
    { name: "Olga Quiquito", renderComponent: <Olgayquiquito /> },
    { name: "Conclusiones", renderComponent: <Conclusiones /> },
  ];

  useEffect(() => {
    if (selectedChapter) {
      // Scroll the selected chapter into view
      chapterRefs.current[selectedChapter.name].scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedChapter]);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {chapters.map((chapter, index) => (
        <Col
          key={index}
          xs={5}
          md={2}
          className="tech-icons"
          onClick={() => setSelectedChapter(chapter)}
          style={{ cursor: "pointer" }}
        >
          <p>{chapter.name}</p>
        </Col>
      ))}
      {chapters.map((chapter, index) => (
        <div key={index} ref={el => chapterRefs.current[chapter.name] = el} style={{ display: selectedChapter?.name === chapter.name ? "block" : "none" }}>
          {chapter.renderComponent}
        </div>
      ))}
    </Row>
  );
}

export default Chapters;