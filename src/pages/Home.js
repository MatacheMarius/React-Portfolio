import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa"

function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col size="lg-10" className="my-5 p-3 pgBody shadow">
          <Row className="d-flex">
            <Col size="md-8" className="order-xs-1 order-md-0">
              <h1 className="display-4 text-center">Matache Marius</h1>
              <p className="lead text-center"></p>
              <p> I started a bootcamp at University of Washington and I am on my way to being a full stack software
                engineer.<strong>If you want to know more details enter in the sections below.</strong></p>
              <div className="row mx-auto">
                <div className="col-md-5">
                  <p className="mb-0">Technologies I've worked in:</p>
                  <ul className="mt-0">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML5</li>
                  </ul>

                </div>
                <div className="col-md-7 mt-3">
                  <dl className="row">
                    <dt className="col-sm-3">Email:</dt>
                    <dd className="col-sm-9"><a target="_blank" rel="noopener noreferrer" href="mailto:matachemarius92@gmail.com"> < FaEnvelope /> matachemarius92@gmail.com</a>
                    </dd>

                    <dt className="col-sm-3">GitHub:</dt>
                    <dd className="col-sm-9">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/MatacheMarius">< FaGithub />https://github.com/MatacheMarius</a>
                    </dd>

                    <dt className="col-sm-3">LinkedIn:</dt>
                    <dd className="col-sm-9"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matache-marius-0324b4130/"><FaLinkedin /> linkedin.com/in/MatacheMarius/</a>
                    </dd>
                  </dl>
                </div>
              </div>
            </Col>
            <div className="col-md-4 my-2 order-xs-0 order-md-1 profileImg">
              <img src="img/Marius1.jpg" className="img-fluid float-right rounded-circle portrait"></img>
 
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}


export default Home;
