import React from "react";

import { Col, Row, Container} from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col size="lg-10" className="my-5 p-3 pgBody shadow">
          <h1 className="text-center">Contact</h1>
          <hr />
          <dl class="row mx-auto">
            <dt class="col-sm-3">Email:</dt>
            <dd class="col-sm-9"><a target="_blank" rel="noopener noreferrer" href="mailto:matachemarius92@gmail.com"> <i class="fa fa-envelope"
              aria-hidden="true"></i> matachemarius92@gmail.com</a>
            </dd>

            <dt class="col-sm-3">GitHub:</dt>
            <dd class="col-sm-9">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/MatacheMarius"><i class="fa fa-github" aria-hidden="true"></i>
              https://github.com/MatacheMarius</a>
            </dd>

            <dt class="col-sm-3">LinkedIn:</dt>
            <dd class="col-sm-9"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matache-marius-0324b4130/"><i
              class="fa fa-linkedin-square" aria-hidden="true"></i>
                        https://www.linkedin.com/in/matache-marius-0324b4130/</a>
            </dd>

            <dt class="col-sm-3">facebook:</dt>
            <dd class="col-sm-9"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/matache.marius.1/"><i
              class="fa fa-linkedin-square" aria-hidden="true"></i>
                        https://www.facebook.com/matache.marius.1/</a>
            </dd>

            <dt class="col-sm-3">Youtube:</dt>
            <dd class="col-sm-9"><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCfMq83OxuSVjXi1TCWzZLuw"><i
              class="fa fa-phone-square" aria-hidden="true"></i>https://www.youtube.com/channel/UCfMq83OxuSVjXi1TCWzZLuw</a>
            </dd>
          </dl>
        </Col>
      </Row>
    </Container>
  );
}


export default Home;
