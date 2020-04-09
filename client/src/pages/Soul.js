import React, { Component, useRef, useEffect } from "react";
import SoulComponent from "../components/SoulComponents/index";
import Breathing from "../components/SoulComponents/Breathing";
import { Container, Row, Col } from "../components/Grid";



const Soul = () => {

  return (
    <div>

      <Container>

        <Row>
          <Col size="md-12">
            <SoulComponent />
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Breathing />
          </Col>
        </Row>

      </Container>

    </div>
  )
}

export default Soul;
