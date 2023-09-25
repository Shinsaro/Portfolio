import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import foto from "./pictures/FotoPerfil.jpg";
import UseAnimations from "react-useanimations";
import linkedin from "react-useanimations/lib/linkedin";
import github from "react-useanimations/lib/github";
import mail from "react-useanimations/lib/mail";
import { Container } from "react-bootstrap";
import "./styles/Introduccion.css";

function Introduccion() {
  return (
    <Container className="containerIntrouction">
      <Col className="fotoSection">
        <img src={foto} alt="Foto de perfil" className="foto" />
      </Col>
      <Col className="DataSection">
        <h1 style={{ fontSize: 35 }}>Alberto García Sánchez</h1>
        <h3>FullStack Developer</h3>
        <Row>
          <UseAnimations animation={mail} size={56} />
          <UseAnimations animation={linkedin} size={56} />
          <UseAnimations animation={github} size={56} />
        </Row>
      </Col>
    </Container>
  );
}

export default Introduccion;
