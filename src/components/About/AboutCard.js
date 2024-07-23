import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Este breve recuento asume una etapa en la vida de una
          familia que fue creciendo a partir de dos nacimientos          
          curiosos en sus fechas, razón esencial tenida en cuenta
          para de la forma más amena posible, entretejer sucesos
          y consideraciones que caracterizan a unos y a otros, pero
          a todos con el  <span className="purple"> cariño </span> de bisabuelos, abuelos, padres e 
          hijos.  
          </p>
          <ul>
            <li className="about-activity">
            <ImPointRight /> <span className="purple"> Idea Original: </span> 
            <br/>
            Un abuelo.  
            </li>
            <li className="about-activity">
            <ImPointRight /><span className="purple">Redacción original:</span> 
            <br/>
            Un abuelo.
            </li>
            <li className="about-activity">
            <ImPointRight /> <span className="purple">Colaboradores:</span>
            <br/>
            Personajes reales. 
            </li>
            <li className="about-activity">
            <ImPointRight /> <span className="purple">Fuentes:</span>
            <br/>
            Vivencias, conversaciones espontaneas, comentarios, fechas.
            </li>
          </ul>          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
