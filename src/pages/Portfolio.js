import React, { useState } from "react";

import { Col, Row, Container } from "react-bootstrap";
import PortCard from "../components/PortCard"

function Portfolio() {
  const projects = require("../projects.json")

  const [] = useState({})

  return (
    <Container className="my-5">
      <Row>
        <Col size="lg-10" className="my-5 p-3 pgBody shadow">
          <h1 className="text-center">Portfolio</h1>
          <hr />
          <main class="row">
            {projects.map((project) => {
              return <PortCard project={project} />
            })}
          </main>
        </Col>
      </Row>
    </Container>
  );
}


export default Portfolio;
