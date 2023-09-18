import React from "react";
import Skills from "./Skills";
import Introduccion from "./Introduccion";
import Projects from "./Projects";
import { View } from "react-native-web";
import { Col, Row } from "react-bootstrap";
import NavBarPortfolio from "./NavBarPortfolio.jsx";

function SinglePagePortfolio() {
  return (
    <View>
      <Col>
        <Row>
          <NavBarPortfolio />
        </Row>
        <Row style={{ marginLeft: 50, marginRight: 50, marginTop: 120 }}>
          <Introduccion />
        </Row>
        <Row style={{ marginLeft: 50, marginRight: 50 }}>
          <Skills />
        </Row>
        <Row style={{ margin: 50 }}>
          <Projects />
        </Row>
      </Col>
    </View>
  );
}

export default SinglePagePortfolio;
